package projectbackend.repository.show_times;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.show_times.ShowTimes;

public interface IShowTimesRepository extends JpaRepository<ShowTimes, Integer> {
}
