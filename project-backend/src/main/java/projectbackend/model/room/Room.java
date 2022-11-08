package projectbackend.model.room;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Integer maximumSeatsInRoom;
    private boolean isDelete;

    public Room() {
    }

    public Room(Integer id, String name, Integer maximumSeatsInRoom, boolean isDelete) {
        this.id = id;
        this.name = name;
        this.maximumSeatsInRoom = maximumSeatsInRoom;
        this.isDelete = isDelete;
    }

    public Integer getMaximumSeatsInRoom() {
        return maximumSeatsInRoom;
    }

    public void setMaximumSeatsInRoom(Integer maximumSeatsInRoom) {
        this.maximumSeatsInRoom = maximumSeatsInRoom;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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
}
