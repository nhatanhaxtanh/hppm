package com.hppm.apartment.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Setter
@Getter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InvalidatedToken {
    @Id
    private String id;

    @Temporal(TemporalType.DATE)
    @Column(name = "expiry_time")
    private Date expiryTime;
}
