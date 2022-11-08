package projectbackend.dto.decentralization;

import projectbackend.model.customer.Customer;
import projectbackend.model.employee.Employee;

public class UserDto {
    private String userName;
    private String password;
    private boolean isDelete;

    public UserDto() {
    }

    public UserDto(String userName, String password, boolean isDelete) {
        this.userName = userName;
        this.password = password;
        this.isDelete = isDelete;
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
}
