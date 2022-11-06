package projectbackend.repository.show_times;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.show_times.Times;

public interface ITimesRepository extends JpaRepository<Times, Integer> {
}
