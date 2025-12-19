package com.hppm.apartment.mapper;

import com.hppm.apartment.dto.response.auth.MeResponse;
import com.hppm.apartment.entity.Account;
import com.hppm.apartment.entity.Permission;
import com.hppm.apartment.entity.Role;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProfileMapper {
    MeResponse toProfile(Account account, String role, Set<String> permissions);

    default String getPrimaryRole(Account account) {
        if (account == null || account.getRoles() == null || account.getRoles().isEmpty()) return null;

        return account.getRoles().stream()
                .findFirst()
                .map(Role::getName)
                .orElse(null);
    }

    default Set<String> getPermissionNames(Account account) {
        if (account == null || account.getRoles() == null) return Collections.emptySet();

        return account.getRoles().stream()
                .flatMap(role -> role.getPermissions().stream())
                .map(Permission::getName)
                .collect(Collectors.toCollection(LinkedHashSet::new));
    }

}
