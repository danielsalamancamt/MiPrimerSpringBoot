package com.example.miprimerspringboot.repository.CRUDRepository;

import com.example.miprimerspringboot.entidades.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentCRUDRepository extends CrudRepository<Student,Integer> {

}
