package projectbackend.dto.customer;

import projectbackend.model.customer.Customer;

public class SavingPointDto {
    private Integer id;
    private Integer point;
    private String dayBooking;
    private Customer customer;

    public SavingPointDto() {
    }

    public SavingPointDto(Integer id, Integer point, String dayBooking, Customer customer) {
        this.id = id;
        this.point = point;
        this.dayBooking = dayBooking;
        this.customer = customer;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPoint() {
        return point;
    }

    public void setPoint(Integer point) {
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
