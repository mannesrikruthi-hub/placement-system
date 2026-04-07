
package com.example.placementreadiness.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/companies")
public class CompanyController {

    private List<String> companies = new ArrayList<>();

    @GetMapping
    public List<String> getCompanies(){
        return companies;
    }

    @PostMapping
    public String addCompany(@RequestBody String name){
        companies.add(name);
        return "Company Added";
    }
}
