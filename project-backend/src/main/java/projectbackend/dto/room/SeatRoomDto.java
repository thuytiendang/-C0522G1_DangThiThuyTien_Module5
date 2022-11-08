package projectbackend.dto.room;

import projectbackend.model.room.Room;
import projectbackend.model.room.Seat;
import projectbackend.model.room.SeatType;

public class SeatRoomDto {
    private Integer id;
    private boolean isDelete;
    private Room room;
    private Seat seat;
    private SeatType seatType;

    public SeatRoomDto() {
    }

    public SeatRoomDto(Integer id, boolean isDelete, Room room, Seat seat, SeatType seatType) {
        this.id = id;
        this.isDelete = isDelete;
        this.room = room;
        this.seat = seat;
        this.seatType = seatType;
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

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Seat getSeat() {
        return seat;
    }

    public void setSeat(Seat seat) {
        this.seat = seat;
    }

    public SeatType getSeatType() {
        return seatType;
    }

    public void setSeatType(SeatType seatType) {
        this.seatType = seatType;
    }
}
