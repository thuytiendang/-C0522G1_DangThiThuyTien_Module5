package projectbackend.dto.show_times;

import projectbackend.model.movie.Movie;
import projectbackend.model.room.Room;
import projectbackend.model.show_times.Times;

import java.sql.Date;

public class ShowTimesDto {
    private int id;
    private boolean isDelete;
    private Date dauBegin;
    private Movie movie;
    private Times times;
    private Room room;

    public ShowTimesDto() {
    }

    public ShowTimesDto(int id, boolean isDelete, Date dauBegin, Movie movie, Times times, Room room) {
        this.id = id;
        this.isDelete = isDelete;
        this.dauBegin = dauBegin;
        this.movie = movie;
        this.times = times;
        this.room = room;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Date getDauBegin() {
        return dauBegin;
    }

    public void setDauBegin(Date dauBegin) {
        this.dauBegin = dauBegin;
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
