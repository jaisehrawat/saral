package com.saral.backend.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.saral.backend.model.User;


public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByPhone(Long phone);    
}
