package com.saral.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.saral.backend.model.SignInRequest;
import com.saral.backend.model.User;
import com.saral.backend.services.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public List<User> getAllUser() {
        return userService.getAllUser();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/")
    public ResponseEntity<User> createUser(@RequestBody User u) {
        try {
            this.userService.createUser(u);
            return ResponseEntity.ok().body(u);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        this.userService.deleteUser(id);
        System.out.println("User deleted successfully...");
    }

    @PutMapping("/updatename/{id}&{name}")
    public User updateName(@PathVariable("id") Long id, @PathVariable("name") String name) {
        return userService.updateName(id, name);
    }

    // @PutMapping("/updatenumber/{id}&{number}")
    // public User updateNumber(@PathVariable("id") Long id, @PathVariable("number")
    // Long number){
    // return userService.updateNumber(id, number);
    // }

    // @PutMapping("/updateprofilephoto/{id}&{profilephoto}")
    // public User updateProfilephoto(@PathVariable("id") Long id,
    // @PathVariable("profilephoto") String profilephoto){
    // return userService.updateProfilePhoto(id, profilephoto);
    // }

    @PutMapping("/updateprovider/{id}&{provider}")
    public User updateProvider(@PathVariable("id") Long id, @PathVariable("provider") boolean provider) {
        return userService.updateProvider(id, provider);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getUserByPhone/{phone}")
    public ResponseEntity<User> getUserByPhone(@PathVariable Long phone) {
        User user = userService.getUserByPhone(phone);

        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(201)).build();
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signin")
    public ResponseEntity<User> signIn(@RequestBody SignInRequest request) {
        User user = userService.getUserByPhone(request.getPhone());

        if (user == null || !request.getPassword().equals(user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
        // Return a success response or generate a JWT token for authentication.
        return ResponseEntity.ok(user);
    }

}


