package com.hppm.apartment.dto.response.auth;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TokenPair {
    private String accessToken;
    private String refreshToken;
    private long accessTtl;
    private long refreshTtl;
}
