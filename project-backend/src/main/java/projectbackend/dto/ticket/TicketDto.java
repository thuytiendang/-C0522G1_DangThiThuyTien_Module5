package projectbackend.dto.ticket;

import projectbackend.model.customer.Customer;
import projectbackend.model.ticket.SeatDetail;

public class TicketDto {
    private Integer id;
    private boolean isDelete;
    private boolean statusTicket;
    private String ticketBookingTime;
    private SeatDetail seatDetail;
    private Customer customer;

    public TicketDto() {
    }

    public TicketDto(Integer id, boolean isDelete, boolean statusTicket, String ticketBookingTime,
                     SeatDetail seatDetail, Customer customer) {
        this.id = id;
        this.isDelete = isDelete;
        this.statusTicket = statusTicket;
        this.ticketBookingTime = ticketBookingTime;
        this.seatDetail = seatDetail;
        this.customer = customer;
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

    public boolean isStatusTicket() {
        return statusTicket;
    }

    public void setStatusTicket(boolean statusTicket) {
        this.statusTicket = statusTicket;
    }

    public String getTicketBookingTime() {
        return ticketBookingTime;
    }

    public void setTicketBookingTime(String ticketBookingTime) {
        this.ticketBookingTime = ticketBookingTime;
    }

    public SeatDetail getSeatDetail() {
        return seatDetail;
    }

    public void setSeatDetail(SeatDetail seatDetail) {
        this.seatDetail = seatDetail;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
