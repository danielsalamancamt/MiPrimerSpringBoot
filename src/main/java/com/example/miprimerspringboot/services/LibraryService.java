package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.entidades.Library;
import com.example.miprimerspringboot.repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibraryService {
    @Autowired
    private LibraryRepository libraryRepository;

    public List<Library> getAll(){return libraryRepository.getAll();}
    
}
