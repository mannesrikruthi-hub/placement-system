package com.example.placementreadiness.controller;

import org.springframework.web.bind.annotation.*;
import com.example.placementreadiness.model.LoginRequest;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class LoginController {

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        if (request.getEmail().equals("admin@gmail.com") &&
            request.getPassword().equals("1234")) {

            return "SUCCESS";
        } else {
            return "INVALID";
        }
    }
}