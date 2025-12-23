package com.hppm.apartment.service.impl;

import com.hppm.apartment.config.AwsConfig;
import com.hppm.apartment.dto.request.upload.PresignUploadRequest;
import com.hppm.apartment.dto.response.upload.PresignUploadResponse;
import com.hppm.apartment.service.UploadService;
import com.hppm.apartment.validator.UploadValidator;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

import org.springframework.stereotype.Service;

import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.PresignedPutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;

import java.time.Duration;
import java.time.LocalDate;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class UploadServiceImpl implements UploadService {

    S3Presigner s3Presigner;
    AwsConfig awsConfig;
    UploadValidator uploadValidator;

    @Override
    public PresignUploadResponse presign(PresignUploadRequest request) {

        uploadValidator.validatePresignRequest(
                request.getFileName(), request.getContentType(), request.getFolder());

        String folder = normalizeFolder(request.getFolder());
        String key = generateObjectKey(folder, request.getFileName());

        PutObjectRequest putObjectRequest =
                PutObjectRequest.builder()
                        .bucket(awsConfig.getBucket())
                        .key(key)
                        .contentType(request.getContentType())
                        .build();

        PutObjectPresignRequest presignRequest =
                PutObjectPresignRequest.builder()
                        .signatureDuration(
                                Duration.ofSeconds(awsConfig.getPresignPutExpireSeconds()))
                        .putObjectRequest(putObjectRequest)
                        .build();

        PresignedPutObjectRequest presignedPutObjectRequest =
                s3Presigner.presignPutObject(presignRequest);

        String putUrl = presignedPutObjectRequest.url().toString();

        return PresignUploadResponse.builder().putUrl(putUrl).build();
    }

    private String normalizeFolder(String folder) {
        if (folder == null || folder.trim().isEmpty()) {
            return "content";
        }
        return folder.trim().toLowerCase();
    }

    // {prefix}{folder}/yyyy/mm/{uuid}-{filename}
    private String generateObjectKey(String folder, String fileName) {
        String prefix = awsConfig.getKeyPrefix();

        LocalDate now = LocalDate.now();
        String year = String.valueOf(now.getYear());
        String month = String.format("%02d", now.getMonthValue());

        String uuid = UUID.randomUUID().toString();
        String safeName = sanitizeFileName(fileName);
        return prefix + folder + "/" + year + "/" + month + "/" + uuid + "-" + safeName;
    }

    private String sanitizeFileName(String fileName) {
        return fileName.trim().replaceAll("[^a-zA-Z0-9._-]", "_");
    }
}
