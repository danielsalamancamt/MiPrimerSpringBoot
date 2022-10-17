package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.entidades.Category;
import com.example.miprimerspringboot.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAll(){return categoryRepository.getAll();}
    public Category save(Category c){
        if(c.getId()==null){
            return categoryRepository.save(c);
        }
        return c;
    }
    public Optional<Category> getById(int id){return categoryRepository.getById(id);}
    public Category update(Category c){
        if(c.getId()!=null){
            Optional<Category> old= categoryRepository.getById(c.getId());
            if(old.isPresent()){
                Category k=old.get();
                if(c.getName()!=null){
                    k.setName(c.getName());
                }
                if(c.getDescription()!=null){
                    k.setDescription(c.getDescription());
                }
                return categoryRepository.save(k);
            }
        }
        return c;
    }
    public boolean delete(int id){
        Optional<Category> cOp= categoryRepository.getById(id);
        if(cOp.isPresent()){
            categoryRepository.delete(cOp.get());
            return true;
        }
        return false;
    }
}
