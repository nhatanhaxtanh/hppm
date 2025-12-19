package com.hppm.apartment.repository;

import com.hppm.apartment.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RoleRepository extends JpaRepository<Role, UUID> {
    Role findByName(String name);

    boolean existsByName(String name);
}
