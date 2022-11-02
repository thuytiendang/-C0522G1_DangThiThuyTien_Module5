package com.example.backend.repository;

import com.example.backend.model.SaveBook;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ISaveBookRepository extends JpaRepository<SaveBook, Integer> {

    @Query(value = "select save_book.* from save_book join customer on save_book.customer_id = customer.id where customer.customer_name like %:nameSearch%", nativeQuery = true,
            countQuery = "select count(*) from (select save_book.* from save_book join customer on save_book.customer_id = customer.id where customer.customer_name like %:nameSearch%) temp_table")
    Page<SaveBook> search(Pageable pageable, @Param("nameSearch") String nameSearch);

//    Page<SaveBook> findByCustomer_CustomerNameContaining(Pageable pageable, String nameSearch);
}
