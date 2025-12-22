package com.hppm.apartment.exception;

import lombok.Getter;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

@Getter
public enum ErrorCode {
    UNCATEGORY_EXCEPTION(9999, "Lỗi hệ thống không xác định", HttpStatus.INTERNAL_SERVER_ERROR),
    FORBIDDEN_ACTION(1001, "Bạn không có quyền thực hiện hành động này", HttpStatus.UNAUTHORIZED),
    INVALID_ACCOUNT(1002, "Tài khoản không hợp lệ", HttpStatus.BAD_REQUEST),
    UNAUTHENTICATED_EXCEPTION(1003, "Bạn chưa đăng nhập", HttpStatus.BAD_REQUEST),
    MISSING_REFRESH_TOKEN_COOKIE(1004, "Thiếu refresh token trong cookie", HttpStatus.BAD_REQUEST),
    INVALID_EMAIL(1005, "Email không hợp lệ", HttpStatus.BAD_REQUEST),
    MISSING_AUTH_HEADER(1006, "Thiếu token xác thực trong header", HttpStatus.BAD_REQUEST),
    INVALID_PASSWORD(1007, "Mật khẩu không chính xác", HttpStatus.BAD_REQUEST),
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
