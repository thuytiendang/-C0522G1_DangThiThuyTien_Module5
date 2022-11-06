package projectbackend.model.movie;

import projectbackend.model.show_times.ShowTimes;
import projectbackend.model.employee.Employee;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private boolean isDelete;
    private String image;
    private String startDay;
    private String endDay;
    private String director;
    private int filmTime;
    private String trailer;
    private String content;
    private String filmStudio;
    private String actor;
    private int version;

    @ManyToOne
    @JoinColumn(name = "movie_type_id", referencedColumnName = "id")
    private MovieType movieType;

    @OneToMany(mappedBy = "movie")
    private Set<ShowTimes> showTimes;

    @OneToMany(mappedBy = "movie")
    private Set<CommentMovie> commentMovies;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    private Employee employee;

    public Movie() {
    }

    public Movie(int id, String name, boolean isDelete, String image, String startDay, String endDay, String director,
                 int filmTime, String trailer, String content, String filmStudio, String actor, int version,
                 MovieType movieType, Set<ShowTimes> showTimes, Set<CommentMovie> commentMovies, Employee employee) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
        this.image = image;
        this.startDay = startDay;
        this.endDay = endDay;
        this.director = director;
        this.filmTime = filmTime;
        this.trailer = trailer;
        this.content = content;
        this.filmStudio = filmStudio;
        this.actor = actor;
        this.version = version;
        this.movieType = movieType;
        this.showTimes = showTimes;
        this.commentMovies = commentMovies;
        this.employee = employee;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getStartDay() {
        return startDay;
    }

    public void setStartDay(String startDay) {
        this.startDay = startDay;
    }

    public String getEndDay() {
        return endDay;
    }

    public void setEndDay(String endDay) {
        this.endDay = endDay;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public int getFilmTime() {
        return filmTime;
    }

    public void setFilmTime(int filmTime) {
        this.filmTime = filmTime;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getFilmStudio() {
        return filmStudio;
    }

    public void setFilmStudio(String filmStudio) {
        this.filmStudio = filmStudio;
    }

    public String getActor() {
        return actor;
    }

    public void setActor(String actor) {
        this.actor = actor;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }

    public MovieType getMovieType() {
        return movieType;
    }

    public void setMovieType(MovieType movieType) {
        this.movieType = movieType;
    }

    public Set<ShowTimes> getShowTimes() {
        return showTimes;
    }

    public void setShowTimes(Set<ShowTimes> showTimes) {
        this.showTimes = showTimes;
    }

    public Set<CommentMovie> getCommentMovies() {
        return commentMovies;
    }

    public void setCommentMovies(Set<CommentMovie> commentMovies) {
        this.commentMovies = commentMovies;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}