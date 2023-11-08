package com.saral.backend.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignInRequest {
    private Long phone;
    private String password;
}