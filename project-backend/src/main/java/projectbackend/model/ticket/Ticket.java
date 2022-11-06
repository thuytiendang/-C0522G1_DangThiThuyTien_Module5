package projectbackend.model.ticket;

import projectbackend.model.customer.Customer;

import javax.persistence.*;

@Entity
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private boolean isDelete;
    private boolean statusTicket;

    @OneToOne
    @JoinColumn(name = "seat_detail_id", referencedColumnName = "id")
    private SeatDetail seatDetail;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;

    public Ticket() {
    }

    public Ticket(int id, boolean isDelete, boolean statusTicket, SeatDetail seatDetail, Customer customer) {
        this.id = id;
        this.isDelete = isDelete;
        this.statusTicket = statusTicket;
        this.seatDetail = seatDetail;
        this.customer = customer;
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

    public boolean isStatusTicket() {
        return statusTicket;
    }

    public void setStatusTicket(boolean statusTicket) {
        this.statusTicket = statusTicket;
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
