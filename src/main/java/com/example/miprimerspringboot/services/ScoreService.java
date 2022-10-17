package com.example.miprimerspringboot.services;

import com.example.miprimerspringboot.entidades.Score;
import com.example.miprimerspringboot.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScoreService {
    @Autowired
    private ScoreRepository scoreRepository;

    public List<Score> getAll(){return scoreRepository.getAll();}

    public Score save(Score c){
        if(c.getIdScore()==null){
            return scoreRepository.save(c);
        }
        return c;
    }
    public Optional<Score> getById(int id){
        return scoreRepository.getById(id);
    }
    public Score update(Score c){
        if(c.getIdScore()!=null){
            Optional<Score> old= scoreRepository.getById(c.getIdScore());
            if(old.isPresent()){
                Score k=old.get();
                if(c.getScore()!=null){
                    k.setScore(c.getScore());
                }
                if(c.getMessageText()!=null){
                    k.setMessageText(c.getMessageText());
                }
                return scoreRepository.save(k);
            }
        }
        return c;
    }
    public boolean delete(int id){
        Optional<Score> cOp= scoreRepository.getById(id);
        if(cOp.isPresent()){
            scoreRepository.delete(cOp.get());
            return true;
        }
        return false;
    }
}
