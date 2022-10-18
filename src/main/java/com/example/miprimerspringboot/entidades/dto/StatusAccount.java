package com.example.miprimerspringboot.entidades.dto;

public class StatusAccount {
    private Integer completed;
    private Integer cancelled;

    public StatusAccount(int completed, int cancelled){
        this.completed=completed;
        this.cancelled=cancelled;
    }

    public int getCompleted() {
        return completed;
    }

    public void setCompleted(int completed) {
        this.completed = completed;
    }

    public int getCancelled() {
        return cancelled;
    }

    public void setCancelled(int cancelled) {
        this.cancelled = cancelled;
    }
}
