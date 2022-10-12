package com.example.miprimerspringboot.controller;

import com.example.miprimerspringboot.entidades.Library;
import com.example.miprimerspringboot.services.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Lib")
public class LibraryController {
    @Autowired
    private LibraryService libraryService;

    @GetMapping("/all")
    public List<Library> getAll(){
        return libraryService.getAll();
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Library save(@RequestBody Library c){
        return libraryService.save(c);
    }

    @GetMapping("/{id}")
    public Optional<Library> getLibrary(@PathVariable("id") int libraryId){
        return libraryService.getById(libraryId);
    }
}
