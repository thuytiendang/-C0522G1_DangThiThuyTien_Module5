package com.example.backend.controller;

import com.example.backend.model.SaveBook;
import com.example.backend.service.ICustomerService;
import com.example.backend.service.ISaveBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class SaveBookRestController {

    @Autowired
    private ISaveBookService iSaveBookService;

    @Autowired
    private ICustomerService iCustomerService;

    @GetMapping("")
    public ResponseEntity<Page<SaveBook>> showSaveBookList(@RequestParam(value = "nameSearch", defaultValue = "") String nameSearch,
                                                           @PageableDefault(value = 5) Pageable pageable) {

        Page<SaveBook> saveBookPage = iSaveBookService.search(pageable, nameSearch);
        if (saveBookPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(saveBookPage, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        iSaveBookService.delete(iSaveBookService.findById(id));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
