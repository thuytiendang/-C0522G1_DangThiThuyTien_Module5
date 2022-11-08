package projectbackend.model.decentralization;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    private String userName;
    private String password;
    private boolean isDelete;

    public User() {
    }

    public User(String userName, String password, boolean isDelete) {
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
