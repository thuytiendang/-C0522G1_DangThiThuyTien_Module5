package projectbackend.repository.promotion;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import projectbackend.model.promotion.Promotion;

public interface IPromotionRepository extends JpaRepository<Promotion, Integer> {

    @Query(value = "select name, image, start_time, end_time, detail, discount from promotion " +
            "where promotion.name like %:name% and is_delete = 0", nativeQuery = true,
            countQuery = "select count(*) from (select name, image, start_time, end_time, detail, discount from promotion " +
                    "where promotion.name like %:name% and is_delete = 0) temp_table")
    Page<Promotion> findPromotion(Pageable pageable, String name);
}
