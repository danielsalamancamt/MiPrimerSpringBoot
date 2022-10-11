package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.entidades.Student;
import com.example.miprimerspringboot.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAll(){
        return studentRepository.getAll();
    }
    public Student save(Student s){
        if(s.getIdStudent()==null){
            return studentRepository.save(s);
        }else{
            Optional<Student> st =studentRepository.getById(s.getIdStudent());
            if(!st.isPresent()){
                return studentRepository.save(s);
            }else{
                return s;
            }
        }
    }

    public Student update(Student s) {
        if (s.getIdStudent() != null) {
            Optional<Student> st = studentRepository.getById(s.getIdStudent());
            if (st.isPresent()) {
                Student temp = st.get();
                if (s.getAge() != null) {
                    temp.setAge(s.getAge());
                }
                if (s.getName() != null) {
                    temp.setName(s.getName());
                }
                if (s.getEmail() != null) {
                    temp.setEmail(s.getEmail());
                }
                if (s.getMovil() != null) {
                    temp.setMovil(s.getMovil());
                }
                if (s.getUniversity() != null) {
                    temp.setUniversity(s.getUniversity());
                }
                return studentRepository.save(temp);
            }
        }
        return s;
    }
    public Student inserBefore(Student s,int i){
        Student sfinal= studentRepository.save(s);
        Optional<Student>swap=studentRepository.getById(i);
        int tempId=sfinal.getPuesto();
        sfinal.setPuesto(swap.get().getPuesto());
        swap.get().setPuesto(tempId);
        studentRepository.save(sfinal);
        studentRepository.save(swap.get());
        return sfinal;
    }

}
