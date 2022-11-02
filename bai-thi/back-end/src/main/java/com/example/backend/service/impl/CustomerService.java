package com.example.backend.service.impl;

import com.example.backend.model.Customer;
import com.example.backend.repository.ICustomerRepository;
import com.example.backend.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository iCustomerRepository;

    @Override
    public List<Customer> showListCustomer() {
        return iCustomerRepository.findAll();
    }
}
