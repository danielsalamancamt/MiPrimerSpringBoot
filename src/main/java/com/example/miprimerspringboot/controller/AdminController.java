package com.example.miprimerspringboot.controller;

import com.example.miprimerspringboot.entidades.Admin;
import com.example.miprimerspringboot.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/all")
    public List<Admin> getAll(){
        return adminService.getAll();
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Admin save(@RequestBody Admin c){
        return adminService.save(c);
    }

    @GetMapping("/{id}")
    public Optional<Admin> getAdmin(@PathVariable("id") int adminId){
        return adminService.getById(adminId);
    }
}
