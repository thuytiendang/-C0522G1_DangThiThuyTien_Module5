package projectbackend.dto.ticket;

import projectbackend.model.show_times.ShowTimes;
import projectbackend.model.ticket.Ticket;

public class SeatDetailDto {
    private Integer id;
    private boolean isDelete;
    private boolean statusSeat;
    private ShowTimes showTimes;

    public SeatDetailDto() {
    }

    public SeatDetailDto(Integer id, boolean isDelete, boolean statusSeat, ShowTimes showTimes) {
        this.id = id;
        this.isDelete = isDelete;
        this.statusSeat = statusSeat;
        this.showTimes = showTimes;
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
