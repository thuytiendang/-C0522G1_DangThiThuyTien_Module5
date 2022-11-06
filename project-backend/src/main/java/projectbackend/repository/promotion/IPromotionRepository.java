package projectbackend.repository.promotion;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.promotion.Promotion;

public interface IPromotionRepository extends JpaRepository<Promotion, Integer> {
}
