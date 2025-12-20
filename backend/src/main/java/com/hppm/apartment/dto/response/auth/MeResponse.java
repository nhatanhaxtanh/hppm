package com.hppm.apartment.dto.response.auth;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.Set;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class MeResponse {
    UUID id;
    String email;
    String name;
    LocalDate createdAt;
    String role;
    Set<String> permissions;
}
