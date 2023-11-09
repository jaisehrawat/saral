package com.saral.backend.services;

import java.util.List;
import org.springframework.stereotype.Service;
import com.saral.backend.model.User;

@Service
public interface UserService {
    List<User> getAllUser();
    User getUserById(String id);
    User createUser(User user);
    User updateName(String id, String name);
    // User updateNumber(Long id, Long number);
    // User updateProfilePhoto(Long id, String profilePhoto);
    User updateProvider(String id, boolean provider);
    void deleteUser(String id);
    User getUserByPhone(Long phone);
}
