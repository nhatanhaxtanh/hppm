package com.hppm.apartment.config;

import lombok.Getter;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;

@Getter
@Configuration
public class AwsConfig {
    @Value("${AWS_REGION}")
    private String region;

    @Value("${AWS_S3_BUCKET}")
    private String bucket;

    @Value("${AWS_CLOUDFRONT_DOMAIN}")
    private String cloudfrontDomain;

    @Value("${AWS_PRESIGN_PUT_EXPIRE_SECONDS:300}")
    private long presignPutExpireSeconds;

    @Value("${AWS_S3_KEY_PREFIX:blog/}")
    private String keyPrefix;

    @Bean
    public S3Presigner s3Presigner() {
        return S3Presigner.builder()
                .region(Region.of(region))
                .credentialsProvider(DefaultCredentialsProvider.create())
                .build();
    }
}
