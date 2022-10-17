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
        if(c.getIdAdmin()==null){
            return adminRepository.save(c);
        }
        return c;
    }
    public Optional<Admin> getById(int id){
        return adminRepository.getById(id);
    }
    public Admin update(Admin c){
        if(c.getIdAdmin()!=null){
            Optional<Admin> old= adminRepository.getById(c.getIdAdmin());
            if(old.isPresent()){
                Admin k=old.get();
                if(c.getName()!=null){
                    k.setName(c.getName());
                }
                if(c.getEmail()!=null){
                    k.setEmail(c.getEmail());
                }
                if(c.getPassword()!=null){
                    k.setPassword(c.getPassword());
                }
                return adminRepository.save(k);
            }
        }
        return c;
    }
    public boolean delete(int id){
        Optional<Admin> cOp= adminRepository.getById(id);
        if(cOp.isPresent()){
            adminRepository.delete(cOp.get());
            return true;
        }
        return false;
    }
}
