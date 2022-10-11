package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.entidades.University;
import com.example.miprimerspringboot.repository.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UniversityService {

    @Autowired
    private UniversityRepository universityRepository;

    public List<University> getAll(){
        return universityRepository.getAll();
    }
    public University save(University u){
        return universityRepository.save(u);
    }
}
