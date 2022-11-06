package projectbackend.model.show_times;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Times {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private boolean isDelete;
    private String startTime;

    @OneToMany(mappedBy = "times")
    private Set<ShowTimes> showTimes;

    public Times() {
    }

    public Times(int id, boolean isDelete, String startTime, Set<ShowTimes> showTimes) {
        this.id = id;
        this.isDelete = isDelete;
        this.startTime = startTime;
        this.showTimes = showTimes;
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

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public Set<ShowTimes> getShowTimes() {
        return showTimes;
    }

    public void setShowTimes(Set<ShowTimes> showTimes) {
        this.showTimes = showTimes;
    }
}
