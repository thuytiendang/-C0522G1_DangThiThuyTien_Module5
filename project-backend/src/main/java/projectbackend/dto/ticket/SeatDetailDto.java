package projectbackend.dto.ticket;

import projectbackend.model.show_times.ShowTimes;
import projectbackend.model.ticket.Ticket;

public class SeatDetailDto {
    private int id;
    private boolean isDelete;
    private boolean statusSeat;
    private ShowTimes showTimes;
    private Ticket ticket;

    public SeatDetailDto() {
    }

    public SeatDetailDto(int id, boolean isDelete, boolean statusSeat, ShowTimes showTimes, Ticket ticket) {
        this.id = id;
        this.isDelete = isDelete;
        this.statusSeat = statusSeat;
        this.showTimes = showTimes;
        this.ticket = ticket;
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

    public Ticket getTicket() {
        return ticket;
    }

    public void setTicket(Ticket ticket) {
        this.ticket = ticket;
    }
}
