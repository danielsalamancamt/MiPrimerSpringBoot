package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.entidades.Client;
import com.example.miprimerspringboot.entidades.dto.TopClients;
import com.example.miprimerspringboot.entidades.dto.StatusAccount;
import com.example.miprimerspringboot.entidades.Reservation;
import com.example.miprimerspringboot.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
    public List<Reservation> getReservationsByPeriod(String dateA,String dateB){
        SimpleDateFormat parser=new SimpleDateFormat("yyyy-MM-dd");
        Date a= new Date();
        Date b=new Date();
        try {
            a=parser.parse(dateA);
            b=parser.parse(dateB);
        }catch (ParseException e){
            e.printStackTrace();;
        }
        if(a.before(b)){
            return reservationRepository.getDatesReport(a,b);
        }else{
            return new ArrayList<Reservation>();
        }
    }
    public StatusAccount getReportByStatus(){
        List<Reservation> completes=reservationRepository.getStatusReport("completed");
        List<Reservation> cancelled=reservationRepository.getStatusReport("cancelled");
        StatusAccount resultado=new StatusAccount(completes.size(),cancelled.size());
        return resultado;
    }
    public List<TopClients> getTopclients(){
        List<TopClients> tc=new ArrayList<>();
        List<Object[]> result= reservationRepository.getTopClients();

        for(int i=0;i<result.size();i++){
            int total=Integer.parseInt(result.get(i)[1].toString());
            Client client= (Client) result.get(i)[0];
            TopClients topClient=new TopClients(total,client);
            tc.add(topClient);
        }
        return tc;
    }

}
