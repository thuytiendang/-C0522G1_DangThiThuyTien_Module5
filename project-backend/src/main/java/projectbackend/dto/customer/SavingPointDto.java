package projectbackend.dto.customer;

import projectbackend.model.customer.Customer;

public class SavingPointDto {
    private int id;
    private int point;
    private String dayBooking;
    private Customer customer;

    public SavingPointDto() {
    }

    public SavingPointDto(int id, int point, String dayBooking, Customer customer) {
        this.id = id;
        this.point = point;
        this.dayBooking = dayBooking;
        this.customer = customer;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    public String getDayBooking() {
        return dayBooking;
    }

    public void setDayBooking(String dayBooking) {
        this.dayBooking = dayBooking;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
