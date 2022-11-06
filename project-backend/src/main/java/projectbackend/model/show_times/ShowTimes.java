package projectbackend.model.show_times;

import projectbackend.model.movie.Movie;
import projectbackend.model.room.Room;
import projectbackend.model.ticket.SeatDetail;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;

@Entity
public class ShowTimes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private boolean isDelete;
    private Date dauBegin;

    @ManyToOne
    @JoinColumn(name = "movie_id", referencedColumnName = "id")
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "times_id", referencedColumnName = "id")
    private Times times;

    @OneToMany(mappedBy = "showTimes")
    private Set<SeatDetail> seatDetails;

    @ManyToOne
    @JoinColumn(name = "room_id", referencedColumnName = "id")
    private Room room;


    public ShowTimes() {
    }

    public ShowTimes(int id, boolean isDelete, Date dauBegin, Movie movie, Times times, Set<SeatDetail> seatDetails, Room room) {
        this.id = id;
        this.isDelete = isDelete;
        this.dauBegin = dauBegin;
        this.movie = movie;
        this.times = times;
        this.seatDetails = seatDetails;
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

    public Set<SeatDetail> getSeatDetails() {
        return seatDetails;
    }

    public void setSeatDetails(Set<SeatDetail> seatDetails) {
        this.seatDetails = seatDetails;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }
}
