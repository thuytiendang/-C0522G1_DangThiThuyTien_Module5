package com.example.backend.dto;

import com.example.backend.model.SaveBook;

import java.util.Set;

public class CustomerDto {

    private int id;
    private String customerName;
    private Set<SaveBook> saveBooks;

    public CustomerDto() {
    }

    public CustomerDto(int id, String customerName, Set<SaveBook> saveBooks) {
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
