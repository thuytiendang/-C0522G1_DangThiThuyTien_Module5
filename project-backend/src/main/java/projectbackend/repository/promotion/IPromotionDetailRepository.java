package projectbackend.repository.promotion;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.promotion.PromotionDetail;

public interface IPromotionDetailRepository extends JpaRepository<PromotionDetail, Integer> {
}
