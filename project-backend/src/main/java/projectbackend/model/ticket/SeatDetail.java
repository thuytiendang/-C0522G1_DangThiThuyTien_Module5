package projectbackend.model.ticket;

import projectbackend.model.show_times.ShowTimes;

import javax.persistence.*;

@Entity
public class SeatDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private boolean isDelete;
    private boolean statusSeat;
    private Integer seatRoomId;

    @ManyToOne
    @JoinColumn(name = "show_time_id", referencedColumnName = "id")
    private ShowTimes showTimes;

    public SeatDetail() {
    }

    public SeatDetail(Integer id, boolean isDelete, boolean statusSeat, Integer seatRoomId, ShowTimes showTimes) {
        this.id = id;
        this.isDelete = isDelete;
        this.statusSeat = statusSeat;
        this.seatRoomId = seatRoomId;
        this.showTimes = showTimes;
    }

    public Integer getSeatRoomId() {
        return seatRoomId;
    }

    public void setSeatRoomId(Integer seatRoomId) {
        this.seatRoomId = seatRoomId;
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

    public boolean isStatusSeat() {
        return statusSeat;
    }

    public void setStatusSeat(boolean statusSeat) {
        this.statusSeat = statusSeat;
    }

    public ShowTimes getShowTimes() {
        return showTimes;
    }

    public void setShowTimes(ShowTimes showTimes) {
        this.showTimes = showTimes;
    }
}
