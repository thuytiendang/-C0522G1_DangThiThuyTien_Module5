package projectbackend.repository.movie;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.movie.CommentMovie;

public interface ICommentMovieRepository extends JpaRepository<CommentMovie, Integer> {
}
