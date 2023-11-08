package com.saral.backend.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "UserColl")
public class User {

    @Id
    private Long id;
    private Long phone;
    private String name;
    private String email;
    private String password;
    private Boolean provider;
}
