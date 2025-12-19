package com.hppm.apartment.enumType;

import com.fasterxml.jackson.annotation.JsonValue;

public enum PreDefinedRole {
    ADMIN("admin");
    private final String jsonValue;
    @JsonValue
    @Override
    public String toString() {
        return jsonValue;
    }

    PreDefinedRole(String jsonValue) {
        this.jsonValue = jsonValue;
    }

}
