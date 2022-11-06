package projectbackend.model.movie;

import projectbackend.model.movie.Movie;

import javax.persistence.*;
import java.util.Set;

@Entity
public class MovieType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private boolean isDelete;

    @OneToMany(mappedBy = "movieType")
    private Set<Movie> movies;

    public MovieType() {
    }

    public MovieType(int id, String name, boolean isDelete, Set<Movie> movies) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
        this.movies = movies;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Set<Movie> getMovies() {
        return movies;
    }

    public void setMovies(Set<Movie> movies) {
        this.movies = movies;
    }
}
