package projectbackend.model.room;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private boolean isDelete;
    private int numberOfSeat;

//    @OneToMany(mappedBy = "room")
//    private Set<SeatRoom> seatRooms;
//
//    @OneToMany(mappedBy = "room")
//    private Set<ShowTimes> showTimes;

    public Room() {
    }

    public Room(int id, String name, boolean isDelete, int numberOfSeat) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
        this.numberOfSeat = numberOfSeat;
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

}
