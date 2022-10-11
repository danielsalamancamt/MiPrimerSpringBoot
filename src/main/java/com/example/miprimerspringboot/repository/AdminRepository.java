package com.example.miprimerspringboot.repository;

import com.example.miprimerspringboot.entidades.Admin;
import com.example.miprimerspringboot.repository.CRUDRepository.AdminCRUDRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class AdminRepository {
    @Autowired
    private AdminCRUDRepository adminCRUDRepository;

    public List<Admin> getAll(){
        return (List<Admin>) adminCRUDRepository.findAll();
    }
    public Admin save(Admin s){
        return adminCRUDRepository.save(s);
    }

    public Optional<Admin> getById(int id){
        return adminCRUDRepository.findById(id);
    }
}
