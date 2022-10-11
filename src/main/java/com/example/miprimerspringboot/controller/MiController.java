package com.example.miprimerspringboot.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/MiController")
public class MiController {

    @GetMapping("/{id}")
    public String saludarG43(@PathVariable("id")int grupo){
        if(grupo>43){
            return "<h1>El Grupo no existe</h1> Revisa los grupos";
        }else{
            return "<h1>Hola G"+grupo+"</h1>";
        }
    }

}