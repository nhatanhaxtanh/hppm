package com.hppm.apartment.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

@Getter
public enum ErrorCode {
    UNCATEGORY_EXCEPTION(9999, "Uncategory Exception", HttpStatus.INTERNAL_SERVER_ERROR),
    FORBIDDEN_ACTION(1001, "You do not have enough permission to do this", HttpStatus.UNAUTHORIZED),
    INVALID_ACCOUNT(1002, "Invalid account", HttpStatus.BAD_REQUEST),
    UNAUTHENTICATED_EXCEPTION(1003, "Unauthenticated", HttpStatus.BAD_REQUEST),
    MISSING_REFRESH_TOKEN_COOKIE(1004, "Missing refresh token in cookie", HttpStatus.BAD_REQUEST),
    INVALID_EMAIL(1005, "Invalid email", HttpStatus.BAD_REQUEST),
    MISSING_AUTH_HEADER(1006, "Missing token in header", HttpStatus.BAD_REQUEST),
    INVALID_PASSWORD(1007, "Invalid password", HttpStatus.BAD_REQUEST),


    ;

    private final int code;
    private final String message;
    private final HttpStatusCode statusCode;

    ErrorCode(int code, String message, HttpStatusCode statusCode) {
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
}
