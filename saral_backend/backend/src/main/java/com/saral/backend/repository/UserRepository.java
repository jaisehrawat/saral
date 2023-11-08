package com.saral.backend.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.saral.backend.model.User;


public interface UserRepository extends MongoRepository<User, Long> {
    Optional<User> findByPhone(Long phone);    
}
