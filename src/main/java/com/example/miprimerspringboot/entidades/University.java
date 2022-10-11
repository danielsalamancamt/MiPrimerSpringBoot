package com.example.miprimerspringboot.entidades;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="university")
public class University {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUniversity;
    private String name;

    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "university")
    @JsonIgnoreProperties("university")
    private List<Student> students;

    public Integer getIdUniversity() {
        return idUniversity;
    }

    public void setIdUniversity(Integer idUniversity) {
        this.idUniversity = idUniversity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }
}
