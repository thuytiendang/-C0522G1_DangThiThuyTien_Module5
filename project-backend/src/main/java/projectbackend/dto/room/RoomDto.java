package projectbackend.dto.room;

public class RoomDto {
    private int id;
    private String name;
    private boolean isDelete;
    private int numberOfSeat;

    public RoomDto() {
    }

    public RoomDto(int id, String name, boolean isDelete, int numberOfSeat) {
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
