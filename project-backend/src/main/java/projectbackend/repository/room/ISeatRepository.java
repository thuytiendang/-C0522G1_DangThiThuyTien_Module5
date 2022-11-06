package projectbackend.repository.room;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.room.Seat;

public interface ISeatRepository extends JpaRepository<Seat, Integer> {
}
