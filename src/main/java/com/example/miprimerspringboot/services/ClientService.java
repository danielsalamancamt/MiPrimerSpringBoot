package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.entidades.Client;
import com.example.miprimerspringboot.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAll(){return clientRepository.getAll();}
    public Client save(Client c){
        if(c.getIdClient()==null){
            return clientRepository.save(c);
        }
        return c;
    }
    public Optional<Client> getById(int id){
        return clientRepository.getById(id);
    }
    public Client update(Client c){
        if(c.getIdClient()!=null){
            Optional<Client> old= clientRepository.getById(c.getIdClient());
            if(old.isPresent()){
                Client k=old.get();
                if(c.getEmail()!=null){
                    k.setEmail(c.getEmail());
                }
                if(c.getPassword()!=null){
                    k.setPassword(c.getPassword());
                }
                if(c.getName()!=null){
                    k.setName(c.getName());
                }
                if(c.getAge()!=null){
                    k.setAge(c.getAge());
                }
                return clientRepository.save(k);
            }
        }
        return c;
    }
    public boolean delete(int id){
        Optional<Client> cOp= clientRepository.getById(id);
        if(cOp.isPresent()){
            clientRepository.delete(cOp.get());
            return true;
        }
        return false;
    }
}