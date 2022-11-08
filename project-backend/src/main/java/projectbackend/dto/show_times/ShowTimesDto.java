package projectbackend.dto.show_times;

import projectbackend.model.movie.Movie;
import projectbackend.model.room.Room;
import projectbackend.model.show_times.Times;

import java.sql.Date;

public class ShowTimesDto {
    private Integer id;
    private boolean isDelete;
    private Date dateProjection;
    private Movie movie;
    private Times times;
    private Room room;

    public ShowTimesDto() {
    }

    public ShowTimesDto(Integer id, boolean isDelete, Date dateProjection, Movie movie, Times times, Room room) {
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
