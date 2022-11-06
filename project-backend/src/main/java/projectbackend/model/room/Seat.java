package projectbackend.model.room;

import projectbackend.model.room.SeatRoom;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Seat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private boolean isDelete;

    @OneToMany(mappedBy = "seat")
    private Set<SeatRoom> seatRooms;

    public Seat() {
    }

    public Seat(int id, String name, boolean isDelete, Set<SeatRoom> seatRooms) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
        this.seatRooms = seatRooms;
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

    public Set<SeatRoom> getSeatRooms() {
        return seatRooms;
    }

    public void setSeatRooms(Set<SeatRoom> seatRooms) {
        this.seatRooms = seatRooms;
    }
}
