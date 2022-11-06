package projectbackend.repository.customer;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.customer.SavingPoint;

public interface ISavingPointRepository extends JpaRepository<SavingPoint, Integer> {
}
