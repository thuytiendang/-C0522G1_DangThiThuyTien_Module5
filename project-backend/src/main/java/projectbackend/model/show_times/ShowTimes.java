package projectbackend.model.show_times;

import projectbackend.model.movie.Movie;
import projectbackend.model.room.Room;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class ShowTimes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private boolean isDelete;
    private Date dateProjection;

    @ManyToOne
    @JoinColumn(name = "movie_id", referencedColumnName = "id")
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "times_id", referencedColumnName = "id")
    private Times times;

    @ManyToOne
    @JoinColumn(name = "room_id", referencedColumnName = "id")
    private Room room;


    public ShowTimes() {
    }

    public ShowTimes(Integer id, boolean isDelete, Date dateProjection, Movie movie, Times times, Room room) {
        this.id = id;
        this.isDelete = isDelete;
        this.dateProjection = dateProjection;
        this.movie = movie;
        this.times = times;
        this.room = room;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Date getDateProjection() {
        return dateProjection;
    }

    public void setDateProjection(Date dateProjection) {
        this.dateProjection = dateProjection;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public Times getTimes() {
        return times;
    }

    public void setTimes(Times times) {
        this.times = times;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }
}
