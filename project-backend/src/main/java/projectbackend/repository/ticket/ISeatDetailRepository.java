package projectbackend.repository.ticket;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.ticket.SeatDetail;

public interface ISeatDetailRepository extends JpaRepository<SeatDetail, Integer> {
}
