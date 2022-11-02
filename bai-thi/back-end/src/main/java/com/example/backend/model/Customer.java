package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String customerName;

    @OneToMany(mappedBy = "customer")
    @JsonBackReference
    private Set<SaveBook> saveBooks;

    public Customer() {
    }

    public Customer(int id, String customerName, Set<SaveBook> saveBooks) {
        this.id = id;
        this.customerName = customerName;
        this.saveBooks = saveBooks;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Set<SaveBook> getSaveBooks() {
        return saveBooks;
    }

    public void setSaveBooks(Set<SaveBook> saveBooks) {
        this.saveBooks = saveBooks;
    }
}
