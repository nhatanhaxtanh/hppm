package com.hppm.apartment.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDateTime;

@Setter
@Getter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvalidatedToken {
    @Id
    private String id;

    private LocalDateTime expiryTime;
}
