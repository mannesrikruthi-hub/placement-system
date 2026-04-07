package com.example.placementreadiness.controller;

import org.springframework.web.bind.annotation.*;
import com.example.placementreadiness.model.Student;
import com.example.placementreadiness.service.StudentService;

@RestController
@CrossOrigin(origins = "*")   // ✅ VERY IMPORTANT
@RequestMapping("/api")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @GetMapping("/test")
    public String test() {
        return "Backend is working";
    }

    @PostMapping("/check")
    public Student check(@RequestBody Student student) {
        return service.checkPlacement(student);
    }
}