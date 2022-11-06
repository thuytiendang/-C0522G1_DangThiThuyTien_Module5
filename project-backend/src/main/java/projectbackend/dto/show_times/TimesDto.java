package projectbackend.dto.show_times;

public class TimesDto {
    private int id;
    private boolean isDelete;
    private String startTime;

    public TimesDto() {
    }

    public TimesDto(int id, boolean isDelete, String startTime) {
        this.id = id;
        this.isDelete = isDelete;
        this.startTime = startTime;
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

}
