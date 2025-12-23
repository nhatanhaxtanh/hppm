package com.hppm.apartment.dto.request.upload;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PresignUploadRequest {
    String fileName;
    String contentType;
    String folder;
}
