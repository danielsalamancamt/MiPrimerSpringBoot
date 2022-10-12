package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.entidades.Admin;
import com.example.miprimerspringboot.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAll(){return adminRepository.getAll();}

    public Admin save(Admin c){
        return adminRepository.save(c);
    }
    public Optional<Admin> getById(int id){
        return adminRepository.getById(id);
    }
}
