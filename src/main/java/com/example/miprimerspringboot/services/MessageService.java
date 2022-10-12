package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.entidades.Message;
import com.example.miprimerspringboot.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll(){return messageRepository.getAll();}

    public Message save(Message c){
        return messageRepository.save(c);
    }
    public Optional<Message> getById(int id){
        return messageRepository.getById(id);
    }
}
