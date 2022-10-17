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
        if(c.getIdReservation()==null){
            return reservationRepository.save(c);
        }
        return c;
    }
    public Optional<Reservation> getById(int id){
        return reservationRepository.getById(id);
    }
    public Reservation update(Reservation c){
        if(c.getIdReservation()!=null){
            Optional<Reservation> old= reservationRepository.getById(c.getIdReservation());
            if(old.isPresent()){
                Reservation k=old.get();
                if(c.getStartDate()!=null){
                    k.setStartDate(c.getStartDate());
                }
                if(c.getDevolutionDate()!=null){
                    k.setDevolutionDate(c.getDevolutionDate());
                }
                if(c.getStatus()!=null){
                    k.setStatus(c.getStatus());
                }
                return reservationRepository.save(k);
            }
        }
        return c;
    }
    public boolean delete(int id){
        Optional<Reservation> cOp= reservationRepository.getById(id);
        if(cOp.isPresent()){
            reservationRepository.delete(cOp.get());
            return true;
        }
        return false;
    }
}
