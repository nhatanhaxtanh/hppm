package com.hppm.apartment.validator;

import java.util.Set;

import org.springframework.stereotype.Component;

import com.hppm.apartment.exception.AppException;
import com.hppm.apartment.exception.ErrorCode;

@Component
public class UploadValidator {
    private static final int MAX_FILE_NAME_LENGTH = 150;
    private static final Set<String> ALLOWED_FOLDERS = Set.of("thumbnail", "content");

    public void validatePresignRequest(String fileName, String contentType, String folder) {
        validateFileName(fileName);
        validateContentType(contentType);
        validateFolder(folder);
    }

    public void validateFileName(String fileName) {
        if (fileName == null) {
            throw new AppException(ErrorCode.INVALID_FILE_NAME);
        }

        String trimmed = fileName.trim();
        if (trimmed.isEmpty()) {
            throw new AppException(ErrorCode.INVALID_FILE_NAME);
        }

        if (trimmed.length() > MAX_FILE_NAME_LENGTH) {
            throw new AppException(ErrorCode.INVALID_FILE_NAME);
        }

        if (trimmed.contains("..") || trimmed.contains("/") || trimmed.contains("\\")) {
            throw new AppException(ErrorCode.INVALID_FILE_NAME);
        }

        int dotIndex = trimmed.lastIndexOf('.');
        if (dotIndex <= 0 || dotIndex == trimmed.length() - 1) {
            throw new AppException(ErrorCode.INVALID_FILE_NAME);
        }
    }

    public void validateContentType(String contentType) {
        if (contentType == null) {
            throw new AppException(ErrorCode.INVALID_CONTENT_TYPE);
        }

        String ct = contentType.trim().toLowerCase();
        if (ct.isEmpty()) {
            throw new AppException(ErrorCode.INVALID_CONTENT_TYPE);
        }

        if (!ct.startsWith("image/")) {
            throw new AppException(ErrorCode.INVALID_CONTENT_TYPE);
        }
    }

    public void validateFolder(String folder) {
        if (folder == null || folder.trim().isEmpty()) {
            return;
        }

        String f = folder.trim().toLowerCase();
        if (!ALLOWED_FOLDERS.contains(f)) {
            throw new AppException(ErrorCode.INVALID_UPLOAD_FOLDER);
        }
    }
}
