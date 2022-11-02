package com.example.backend.model;

import javax.persistence.*;

@Entity
public class SaveBook {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String openDate;
    private String startDate;
    private String dueDate;
    private double money;
    private String interest;
    private String moreBenefit;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")

    private Customer customer;

    public SaveBook() {
    }

    public SaveBook(int id, String openDate, String startDate, String dueDate, double money, String interest,
                    String moreBenefit, Customer customer) {
        this.id = id;
        this.openDate = openDate;
        this.startDate = startDate;
        this.dueDate = dueDate;
        this.money = money;
        this.interest = interest;
        this.moreBenefit = moreBenefit;
        this.customer = customer;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOpenDate() {
        return openDate;
    }

    public void setOpenDate(String openDate) {
        this.openDate = openDate;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public double getMoney() {
        return money;
    }

    public void setMoney(double money) {
        this.money = money;
    }

    public String getInterest() {
        return interest;
    }

    public void setInterest(String interest) {
        this.interest = interest;
    }

    public String getMoreBenefit() {
        return moreBenefit;
    }

    public void setMoreBenefit(String moreBenefit) {
        this.moreBenefit = moreBenefit;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
