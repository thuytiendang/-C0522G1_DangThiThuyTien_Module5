package projectbackend.dto.movie;

public class MovieTypeDto {
    private Integer id;
    private String name;
    private boolean isDelete;

    public MovieTypeDto() {
    }

    public MovieTypeDto(Integer id, String name, boolean isDelete) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }
}
