package com.example.miprimerspringboot.repository;

import com.example.miprimerspringboot.entidades.Reservation;
import com.example.miprimerspringboot.repository.CRUDRepository.ReservationCRUDRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class ReservationRepository {
    @Autowired
    private ReservationCRUDRepository reservationCRUDRepository;

    public List<Reservation> getAll(){
        return (List<Reservation>) reservationCRUDRepository.findAll();
    }
    public Reservation save(Reservation s){
        return reservationCRUDRepository.save(s);
    }

    public Optional<Reservation> getById(int id){
        return reservationCRUDRepository.findById(id);
    }
    public void delete(Reservation c){
        reservationCRUDRepository.delete(c);
    }
    public List<Reservation> getDatesReport(Date inicio,Date fin){
        return reservationCRUDRepository.findAllByStartDateAfterAndStartDateBefore(inicio,fin);
    }
    public List<Reservation> getStatusReport(String sts){
        return reservationCRUDRepository.findAllByStatus(sts);
    }
    public List<Object[]> getTopClients(){
        return reservationCRUDRepository.getTopClients();
    }
}
