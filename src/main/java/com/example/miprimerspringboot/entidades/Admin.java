package com.example.miprimerspringboot.entidades;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="admin")
public class Admin implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAdmin;
    @Column(nullable = false,length = 250)
    private String name;
    @Column(nullable = false,length = 45)
    private String email;
    @Column(nullable = false,length = 45)
    private String password;

    public Integer getIdAdmin() {
        return idAdmin;
    }

    public void setIdAdmin(Integer idAdmin) {
        this.idAdmin = idAdmin;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
