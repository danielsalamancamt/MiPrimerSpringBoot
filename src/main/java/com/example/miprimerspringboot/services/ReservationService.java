package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.entidades.Reservation;
import com.example.miprimerspringboot.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll(){return reservationRepository.getAll();}

    public Reservation save(Reservation c){
        int i=reservationRepository.save(c).getIdReservation();
        Optional<Reservation>swap=reservationRepository.getById(i);
        swap.get().setStatus("created");
        return reservationRepository.save(c);
    }

    public Optional<Reservation> getById(int id){
        return reservationRepository.getById(id);
    }
}
