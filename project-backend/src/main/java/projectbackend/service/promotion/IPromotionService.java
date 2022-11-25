package projectbackend.service.promotion;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import projectbackend.model.promotion.Promotion;

import java.util.Optional;

public interface IPromotionService {
    Page<Promotion> findAll(Pageable pageable, String name);

    Optional<Promotion> findById(int id);
}
