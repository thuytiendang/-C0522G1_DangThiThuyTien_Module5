package com.example.backend.service.impl;

import com.example.backend.model.SaveBook;
import com.example.backend.repository.ISaveBookRepository;
import com.example.backend.service.ISaveBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaveBookService implements ISaveBookService {

    @Autowired
    private ISaveBookRepository iSaveBookRepository;

    @Override
    public List<SaveBook> showSaveBookList() {
        return iSaveBookRepository.findAll();
    }

    @Override
    public void add(SaveBook saveBook) {
        iSaveBookRepository.save(saveBook);
    }

    @Override
    public void delete(SaveBook saveBook) {
        iSaveBookRepository.delete(saveBook);
    }

    @Override
    public void update(SaveBook saveBook) {
        iSaveBookRepository.save(saveBook);
    }

    @Override
    public SaveBook findById(int id) {
        return iSaveBookRepository.findById(id).orElse(null);
    }
//
//    @Override
//    public Page<SaveBook> findByCustomer_CustomerNameContaining(Pageable pageable, String nameSearch) {
//        return iSaveBookRepository.findByCustomer_CustomerNameContaining(pageable, nameSearch);
//    }

    @Override
    public Page<SaveBook> search(Pageable pageable, String nameSearch) {
        return iSaveBookRepository.search(pageable, nameSearch);
    }
}
