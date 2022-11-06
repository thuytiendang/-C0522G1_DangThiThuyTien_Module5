package projectbackend.model.room;

import projectbackend.model.room.SeatRoom;

import javax.persistence.*;
import java.util.Set;

@Entity
public class SeatType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int price;
    private boolean isDelete;

    @OneToMany(mappedBy = "seatType")
    private Set<SeatRoom> seatRooms;

    public SeatType() {
    }

    public SeatType(int id, String name, int price, boolean isDelete, Set<SeatRoom> seatRooms) {
        this.id = id;
        this.name = name;
        this.price = price;
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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
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
