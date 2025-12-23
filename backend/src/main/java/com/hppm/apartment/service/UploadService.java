package com.hppm.apartment.service;

import com.hppm.apartment.dto.request.upload.PresignUploadRequest;
import com.hppm.apartment.dto.response.upload.PresignUploadResponse;

public interface UploadService {
    PresignUploadResponse presign(PresignUploadRequest request);
}
