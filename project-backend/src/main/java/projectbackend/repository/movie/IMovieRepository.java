package projectbackend.repository.movie;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.movie.Movie;

public interface IMovieRepository extends JpaRepository<Movie, Integer> {
}
