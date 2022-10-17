package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.entidades.Library;
import com.example.miprimerspringboot.repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LibraryService {
    @Autowired
    private LibraryRepository libraryRepository;

    public List<Library> getAll(){return libraryRepository.getAll();}

    public Library save(Library c){
        if(c.getId()==null){
            return libraryRepository.save(c);
        }
        return c;
    }
    public Optional<Library> getById(int id){
        return libraryRepository.getById(id);
    }
    public Library update(Library c){
        if(c.getId()!=null){
            Optional<Library> old= libraryRepository.getById(c.getId());
            if(old.isPresent()){
                Library k=old.get();
                if(c.getName()!=null){
                    k.setName(c.getName());
                }
                if(c.getTarget()!=null){
                    k.setTarget(c.getTarget());
                }
                if(c.getCapacity()!=null){
                    k.setCapacity(c.getCapacity());
                }
                if(c.getDescription()!=null){
                    k.setDescription(c.getDescription());
                }
                return libraryRepository.save(k);
            }
        }
        return c;
    }
    public boolean delete(int id){
        Optional<Library> cOp= libraryRepository.getById(id);
        if(cOp.isPresent()){
            libraryRepository.delete(cOp.get());
            return true;
        }
        return false;
    }
}
