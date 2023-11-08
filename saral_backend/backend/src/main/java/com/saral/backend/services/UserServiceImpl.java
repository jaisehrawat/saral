package com.saral.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saral.backend.repository.UserRepository;
import com.saral.backend.model.User;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateName(Long id, String name) {
        User existingUser = getUserById(id);
        if (existingUser != null) {
            existingUser.setName(name);
            return userRepository.save(existingUser);
        }
        return null;
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<User> getAllUser() {
        List<User> users = userRepository.findAll();
        return users;
    }

    @Override
    public User getUserById(Long id) {
        return this.userRepository.findById(id).orElse(null);
    }

    // @Override
    // public User updateNumber(Long id, Long number) {
    //     User existingUser = getUserById(id);
    //     if (existingUser != null) {
    //         existingUser.setNumber(number);
    //         return userRepository.save(existingUser);
    //     }
    //     return null;
    // }

    // @Override
    // public User updateProfilePhoto(Long id, String profilePhoto) {
    //     User existingUser = getUserById(id);
    //     if (existingUser != null) {
    //         existingUser.setProfilePhoto(profilePhoto);
    //         return userRepository.save(existingUser);
    //     }
    //     return null;
    // }

    @Override
    public User updateProvider(Long id, boolean provider) {
        User existingUser = getUserById(id);
        if (existingUser != null) {
            existingUser.setProvider(provider);
            return userRepository.save(existingUser);
        }
        return null;
    }

    @Override
    public User getUserByPhone(Long phone) {
        return this.userRepository.findByPhone(phone).orElse(null);
    }

}


// package com.taksh.saral.dao;

// import java.util.Optional;

// import org.springframework.data.mongodb.repository.MongoRepository;

// import com.taksh.saral.model.User;

// public interface MongoUserRepository extends MongoRepository<User, Long> {
//     Optional<User> findByPhone(Long phone);
// }
