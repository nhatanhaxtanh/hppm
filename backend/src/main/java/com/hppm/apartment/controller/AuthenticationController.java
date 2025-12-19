package com.hppm.apartment.controller;

import com.hppm.apartment.dto.ApiResponse;
import com.hppm.apartment.dto.request.auth.AuthenticationRequest;
import com.hppm.apartment.dto.response.auth.AuthenticationResponse;
import com.hppm.apartment.dto.response.auth.LoginResult;
import com.hppm.apartment.dto.response.auth.MeResponse;
import com.hppm.apartment.dto.response.auth.TokenPair;
import com.hppm.apartment.service.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthenticationResponse>> login(
            @RequestBody AuthenticationRequest request) {

        LoginResult result = authenticationService.authenticate(request);

        TokenPair pair = result.getTokenPair();

        ResponseCookie refreshCookie =
                ResponseCookie.from("refresh_token", pair.getRefreshToken())
                        .httpOnly(true)
                        .secure(true)
                        .sameSite("None")
                        .path("/auth")
                        .maxAge(pair.getRefreshTtl())
                        .build();

        AuthenticationResponse body =
                AuthenticationResponse.builder()
                        .authenticated(true)
                        .token(pair.getAccessToken())
                        .role(result.getRole())
                        .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, refreshCookie.toString())
                .body(ApiResponse.<AuthenticationResponse>builder().result(body).build());
    }

    @GetMapping("/me")
    public ResponseEntity<ApiResponse<MeResponse>> me(
            @RequestHeader(name = HttpHeaders.AUTHORIZATION, required = false) String authHeader)
            throws Exception {

        MeResponse profile = authenticationService.me(authHeader);

        return ResponseEntity.ok(ApiResponse.<MeResponse>builder().result(profile).build());
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse<Void>> logout(
            @CookieValue(name = "refresh_token", required = false) String refreshToken,
            @RequestHeader(name = HttpHeaders.AUTHORIZATION, required = false) String authHeader)
            throws Exception {

        authenticationService.logout(authHeader, refreshToken);

        ResponseCookie deleteRefresh =
                ResponseCookie.from("refresh_token", "")
                        .httpOnly(true)
                        .secure(true)
                        .sameSite("None")
                        .path("/auth")
                        .maxAge(0)
                        .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, deleteRefresh.toString())
                .body(ApiResponse.<Void>builder().build());
    }

    @PostMapping("/refresh")
    public ResponseEntity<ApiResponse<AuthenticationResponse>> refresh(
            @CookieValue(name = "refresh_token", required = false) String refreshToken) throws Exception {
        LoginResult result = authenticationService.refreshFromCookie(refreshToken);
        TokenPair pair = result.getTokenPair();

        ResponseCookie newRefresh =
                ResponseCookie.from("refresh_token", pair.getRefreshToken())
                        .httpOnly(true)
                        .secure(true)
                        .sameSite("None")
                        .path("/auth")
                        .maxAge(pair.getRefreshTtl())
                        .build();

        AuthenticationResponse body =
                AuthenticationResponse.builder()
                        .authenticated(true)
                        .token(pair.getAccessToken())
                        .role(result.getRole())
                        .build();

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, newRefresh.toString())
                .body(ApiResponse.<AuthenticationResponse>builder().result(body).build());
    }


}
