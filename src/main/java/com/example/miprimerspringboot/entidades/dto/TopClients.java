package com.example.miprimerspringboot.entidades.dto;

import com.example.miprimerspringboot.entidades.Client;

public class TopClients {
    private int total;
    private Client client;

    public TopClients(int total, Client client){
        this.total=total;
        this.client=client;
    }

    public long getTotal() {
        return total;
    }
    public void setTotal(int total) {
        this.total = total;
    }
    public Client getClient() {
        return client;
    }
    public void setClient(Client client) {
        this.client = client;
    }
}
