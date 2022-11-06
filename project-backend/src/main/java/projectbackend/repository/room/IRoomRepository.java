package projectbackend.repository.room;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.room.Room;

public interface IRoomRepository extends JpaRepository<Room, Integer> {
}
