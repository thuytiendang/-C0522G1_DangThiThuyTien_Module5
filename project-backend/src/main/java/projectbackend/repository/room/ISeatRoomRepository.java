package projectbackend.repository.room;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.room.SeatRoom;

public interface ISeatRoomRepository extends JpaRepository<SeatRoom, Integer> {
}
