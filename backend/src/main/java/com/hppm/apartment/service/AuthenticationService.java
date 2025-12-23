package com.hppm.apartment.service;

import com.hppm.apartment.dto.request.auth.AuthenticationRequest;
import com.hppm.apartment.dto.response.auth.LoginResult;
import com.hppm.apartment.dto.response.auth.MeResponse;
import com.hppm.apartment.dto.response.auth.TokenPair;
import com.hppm.apartment.entity.Account;
import com.hppm.apartment.entity.InvalidatedToken;
import com.hppm.apartment.exception.AppException;
import com.hppm.apartment.exception.ErrorCode;
import com.hppm.apartment.mapper.ProfileMapper;
import com.hppm.apartment.repository.AccountRepository;
import com.hppm.apartment.repository.InvalidatedTokenRepository;
import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSObject;
import com.nimbusds.jose.JWSVerifier;
import com.nimbusds.jose.Payload;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Set;
import java.util.StringJoiner;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationService {
    PasswordEncoder passwordEncoder;
    AccountRepository accountRepository;
    InvalidatedTokenRepository invalidatedTokenRepository;
    ProfileMapper profileMapper;

    @NonFinal
    @Value("${JWT_SIGNER_KEY_BASE64}")
    protected String SIGNER_KEY;

    @NonFinal
    @Value("${JWT_VALID_DURATION}")
    protected Long VALID_DURATION;

    @NonFinal
    @Value("${JWT_REFRESHABLE_DURATION}")
    protected Long REFRESHABLE_DURATION;

    private String buildScope(Account account) {
        StringJoiner stringJoiner = new StringJoiner(" ");
        if (!CollectionUtils.isEmpty(account.getRoles())) {
            account.getRoles()
                    .forEach(
                            role -> {
                                stringJoiner.add("ROLE_" + role.getName());
                                if (!CollectionUtils.isEmpty(role.getPermissions())) {
                                    role.getPermissions()
                                            .forEach(
                                                    permission -> {
                                                        stringJoiner.add(permission.getName());
                                                    });
                                }
                            });
        }
        return stringJoiner.toString();
    }

    private String generateToken(Account account) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512); // this is header
        JWTClaimsSet jwtClaimsSet =
                new JWTClaimsSet.Builder() // this is payload
                        .subject(account.getEmail()) // owner of token info
                        .issuer("hppm") // person who grant this token
                        .issueTime(new Date()) // granted at time
                        .expirationTime(
                                new Date(
                                        Instant.now()
                                                .plus(VALID_DURATION, ChronoUnit.SECONDS)
                                                .toEpochMilli())) // expiration date of this token
                        .jwtID(UUID.randomUUID().toString())
                        .claim("scope", buildScope(account)) // authorized work here
                        .build();
        Payload payload = new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject = new JWSObject(header, payload);
        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY)); // signed
            return jwsObject.serialize();
        } catch (JOSEException e) {
            log.error("Cannot create token: Reason ", e);
            throw new RuntimeException(e);
        }
    }

    private String generateRefreshToken(Account account) {
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);
        JWTClaimsSet jwtClaimsSet =
                new JWTClaimsSet.Builder()
                        .subject(account.getEmail())
                        .issuer("hppm")
                        .issueTime(new Date())
                        .expirationTime(
                                new Date(
                                        Instant.now()
                                                .plus(REFRESHABLE_DURATION, ChronoUnit.SECONDS)
                                                .toEpochMilli()))
                        .jwtID(UUID.randomUUID().toString())
                        .claim("scope", buildScope(account))
                        .claim("tok", "REFRESH")
                        .build();
        Payload payload = new Payload(jwtClaimsSet.toJSONObject());
        JWSObject jwsObject = new JWSObject(header, payload);
        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY)); // signed
            return jwsObject.serialize();
        } catch (JOSEException e) {
            log.error("Cannot create refresh token: Reason ", e);
            throw new RuntimeException(e);
        }
    }

    public TokenPair generateTokenPair(Account user) {
        String accessToken = generateToken(user);
        String refreshToken = generateRefreshToken(user);

        return TokenPair.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .accessTtl(VALID_DURATION)
                .refreshTtl(REFRESHABLE_DURATION)
                .build();
    }

    private SignedJWT verifyToken(String token, boolean isRefresh)
            throws JOSEException, ParseException {
        JWSVerifier verifier = new MACVerifier(SIGNER_KEY.getBytes());
        SignedJWT signedJWT = SignedJWT.parse(token);

        if (invalidatedTokenRepository.existsById(signedJWT.getJWTClaimsSet().getJWTID())) {
            throw new AppException(ErrorCode.UNAUTHENTICATED_EXCEPTION);
        }
        if (isRefresh) {
            Object tok = signedJWT.getJWTClaimsSet().getClaim("tok");
            if (!"REFRESH".equals(tok)) {
                throw new AppException(ErrorCode.UNAUTHENTICATED_EXCEPTION);
            }
        }
        // there are 2 kinds of token
        // 1. Token to call API --> isRefresh == null
        // 2. Token to call API to refresh token.
        // Ex: Access token is revoke, but refresh token still exist
        Date expiryTime =
                (isRefresh)
                        ? new Date(
                                signedJWT
                                        .getJWTClaimsSet()
                                        .getIssueTime()
                                        .toInstant()
                                        .plus(REFRESHABLE_DURATION, ChronoUnit.SECONDS)
                                        .toEpochMilli())
                        : signedJWT.getJWTClaimsSet().getExpirationTime();

        var verified = signedJWT.verify(verifier);
        if (!(verified && expiryTime.after(new Date()))) {
            throw new AppException(ErrorCode.UNAUTHENTICATED_EXCEPTION);
        }
        return signedJWT;
    }

    public void logout(String authHeader, String refreshToken)
            throws ParseException, JOSEException {

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String accessToken = authHeader.substring(7);

            SignedJWT sjwt = verifyToken(accessToken, false);
            String jti = sjwt.getJWTClaimsSet().getJWTID();
            Date exp = sjwt.getJWTClaimsSet().getExpirationTime();

            invalidatedTokenRepository.save(
                    InvalidatedToken.builder().id(jti).expiryTime(exp).build());
        }

        if (refreshToken != null && !refreshToken.isBlank()) {
            SignedJWT sjwt = verifyToken(refreshToken, true);
            String jti = sjwt.getJWTClaimsSet().getJWTID();
            Date exp = sjwt.getJWTClaimsSet().getExpirationTime();

            invalidatedTokenRepository.save(
                    InvalidatedToken.builder().id(jti).expiryTime(exp).build());
        }
    }

    @Transactional
    public LoginResult refreshFromCookie(String refreshToken) throws ParseException, JOSEException {

        if (refreshToken == null || refreshToken.isBlank()) {
            throw new AppException(ErrorCode.MISSING_REFRESH_TOKEN_COOKIE);
        }

        SignedJWT signed = verifyToken(refreshToken, true);
        String email = signed.getJWTClaimsSet().getSubject();

        Account user =
                accountRepository
                        .findByEmail(email)
                        .orElseThrow(() -> new AppException(ErrorCode.INVALID_EMAIL));

        String oldJti = signed.getJWTClaimsSet().getJWTID();
        Date oldExp = signed.getJWTClaimsSet().getExpirationTime();

        invalidatedTokenRepository.save(
                InvalidatedToken.builder().id(oldJti).expiryTime(oldExp).build());

        String newAccess = generateToken(user);
        String newRefresh = generateRefreshToken(user);

        TokenPair pair =
                TokenPair.builder()
                        .accessToken(newAccess)
                        .refreshToken(newRefresh)
                        .accessTtl(VALID_DURATION)
                        .refreshTtl(REFRESHABLE_DURATION)
                        .build();

        String primaryRole = null;
        if (user.getRoles() != null && !user.getRoles().isEmpty()) {
            primaryRole = user.getRoles().iterator().next().getName();
        }

        return LoginResult.builder().tokenPair(pair).role(primaryRole).build();
    }

    @Transactional
    public MeResponse me(String authHeader) throws ParseException, JOSEException {
        if (authHeader == null || !authHeader.startsWith("Bearer")) {
            throw new AppException(ErrorCode.MISSING_AUTH_HEADER);
        }

        String token = authHeader.substring(7);
        SignedJWT signed = verifyToken(token, false);
        String email = signed.getJWTClaimsSet().getSubject();
        Account user =
                accountRepository
                        .findByEmail(email)
                        .orElseThrow(() -> new AppException(ErrorCode.INVALID_EMAIL));

        user.getRoles().forEach(role -> role.getPermissions().size());

        String role = profileMapper.getPrimaryRole(user);
        Set<String> permissions = profileMapper.getPermissionNames(user);

        return profileMapper.toProfile(user, role, permissions);
    }

    public LoginResult authenticate(AuthenticationRequest authenticationRequest) {
        Account user =
                accountRepository
                        .findByEmail(authenticationRequest.getEmail())
                        .orElseThrow(() -> new AppException(ErrorCode.INVALID_EMAIL));

        boolean authenticated =
                passwordEncoder.matches(authenticationRequest.getPassword(), user.getPassword());
        if (!authenticated) {
            throw new AppException(ErrorCode.INVALID_PASSWORD);
        }

        String access = generateToken(user);
        String refresh = generateRefreshToken(user);

        TokenPair pair =
                TokenPair.builder()
                        .accessToken(access)
                        .refreshToken(refresh)
                        .accessTtl(VALID_DURATION)
                        .refreshTtl(REFRESHABLE_DURATION)
                        .build();

        String primaryRole = null;
        if (user.getRoles() != null && !user.getRoles().isEmpty()) {
            primaryRole = user.getRoles().iterator().next().getName();
        }
        return LoginResult.builder().tokenPair(pair).role(primaryRole).build();
    }
}
