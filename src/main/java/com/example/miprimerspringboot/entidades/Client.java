package com.example.miprimerspringboot.entidades;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="client")
public class Client implements Serializable {
    private Integer idClient;
    private String email;
    private String password;
    private String name;
    private Integer age;
    private List<Message>messages;
    private List<Reservation>reservations;
}
