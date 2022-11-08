package projectbackend.model.ticket;

import projectbackend.model.show_times.ShowTimes;

import javax.persistence.*;

@Entity
public class SeatDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private boolean isDelete;
    private boolean statusSeat;

    @ManyToOne
    @JoinColumn(name = "show_time_id", referencedColumnName = "id")
    private ShowTimes showTimes;

    public SeatDetail() {
    }

    public SeatDetail(int id, boolean isDelete, boolean statusSeat, ShowTimes showTimes) {
        this.id = id;
        this.isDelete = isDelete;
        this.statusSeat = statusSeat;
        this.showTimes = showTimes;
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
