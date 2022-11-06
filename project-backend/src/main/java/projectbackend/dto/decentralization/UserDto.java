package projectbackend.dto.decentralization;

import projectbackend.model.customer.Customer;
import projectbackend.model.employee.Employee;

public class UserDto {
    private String userName;
    private String password;
    private boolean isDelete;
    private Customer customer;
    private Employee employee;

    public UserDto() {
    }

    public UserDto(String userName, String password, boolean isDelete, Customer customer, Employee employee) {
        this.userName = userName;
        this.password = password;
        this.isDelete = isDelete;
        this.customer = customer;
        this.employee = employee;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
