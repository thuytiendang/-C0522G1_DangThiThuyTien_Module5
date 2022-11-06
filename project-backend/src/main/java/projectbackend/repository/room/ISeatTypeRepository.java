package projectbackend.repository.room;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.room.SeatType;

public interface ISeatTypeRepository extends JpaRepository<SeatType, Integer> {
}
