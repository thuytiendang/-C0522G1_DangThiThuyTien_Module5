package projectbackend.dto.show_times;

public class TimesDto {
    private Integer id;
    private boolean isDelete;
    private String startTime;

    public TimesDto() {
    }

    public TimesDto(Integer id, boolean isDelete, String startTime) {
        this.id = id;
        this.isDelete = isDelete;
        this.startTime = startTime;
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

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }
}
