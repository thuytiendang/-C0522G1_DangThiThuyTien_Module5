package com.example.backend.service;

import com.example.backend.model.SaveBook;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ISaveBookService {
    List<SaveBook> showSaveBookList();

    void add(SaveBook saveBook);

    void delete(SaveBook saveBook);

    void update(SaveBook saveBook);

    SaveBook findById(int id);

    Page<SaveBook> search(Pageable pageable, String nameSearch);

//    Page<SaveBook> findByCustomer_CustomerNameContaining(Pageable pageable, String nameSearch);
}
