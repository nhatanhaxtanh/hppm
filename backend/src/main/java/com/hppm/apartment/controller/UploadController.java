package com.hppm.apartment.controller;

import com.hppm.apartment.dto.ApiResponse;
import com.hppm.apartment.dto.request.upload.PresignUploadRequest;
import com.hppm.apartment.dto.response.upload.PresignUploadResponse;
import com.hppm.apartment.service.UploadService;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/uploads")
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class UploadController {
    UploadService uploadService;

    @PostMapping("/presign")
    @PreAuthorize("hasAuthority('ADMIN.FULL_ACCESS')")
    public ApiResponse<PresignUploadResponse> presign(
            @RequestBody PresignUploadRequest presignUploadRequest) {
        PresignUploadResponse response = uploadService.presign(presignUploadRequest);

        return ApiResponse.<PresignUploadResponse>builder()
                .result(response)
                .message("Presign Successfully")
                .build();
    }
}
