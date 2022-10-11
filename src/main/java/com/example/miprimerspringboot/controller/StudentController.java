package com.example.miprimerspringboot.controller;

import com.example.miprimerspringboot.entidades.Student;
import com.example.miprimerspringboot.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/all")
    public List<Student> getAll(){
        return  studentService.getAll();
    }

    @PostMapping("/save")
    public Student save(@RequestBody Student s){
        return studentService.save(s);
    }

    @PutMapping("/update")
    public Student update(@RequestBody Student s){return studentService.update(s);}

    @PutMapping("/insert")
    public Student insert(@RequestBody Student s){return studentService.inserBefore(s,2);}
}
