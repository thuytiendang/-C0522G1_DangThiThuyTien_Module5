package projectbackend.model.room;

import projectbackend.model.show_times.ShowTimes;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private boolean isDelete;
    private int numberOfSeat;

    @OneToMany(mappedBy = "room")
    private Set<SeatRoom> seatRooms;

    @OneToMany(mappedBy = "room")
    private Set<ShowTimes> showTimes;

    public Room() {
    }

    public Room(int id, String name, boolean isDelete, int numberOfSeat, Set<SeatRoom> seatRooms, Set<ShowTimes> showTimes) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
        this.numberOfSeat = numberOfSeat;
        this.seatRooms = seatRooms;
        this.showTimes = showTimes;
    }

    public Set<ShowTimes> getShowTimes() {
        return showTimes;
    }

    public void setShowTimes(Set<ShowTimes> showTimes) {
        this.showTimes = showTimes;
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

    public int getNumberOfSeat() {
        return numberOfSeat;
    }

    public void setNumberOfSeat(int numberOfSeat) {
        this.numberOfSeat = numberOfSeat;
    }

    public Set<SeatRoom> getSeatRooms() {
        return seatRooms;
    }

    public void setSeatRooms(Set<SeatRoom> seatRooms) {
        this.seatRooms = seatRooms;
    }
}
