package projectbackend.model.decentralization;

import projectbackend.model.decentralization.Role;
import projectbackend.model.decentralization.User;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "user_role")
public class UserRole implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    private Role role;

    @Id
    @ManyToOne
    @JoinColumn(name = "user_name", referencedColumnName = "userName")
    private User user;

    @Column(name = "is_delete")
    private boolean isDelete;

    public UserRole() {
    }

    public UserRole(Role role, User user, boolean isDelete) {
        this.role = role;
        this.user = user;
        this.isDelete = isDelete;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }
}
