
package com.example.placementreadiness.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/login")
    public String login(@RequestBody String user){
        return "Login Successful (Mock)";
    }
}
