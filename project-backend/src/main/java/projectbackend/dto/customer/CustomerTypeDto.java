package projectbackend.dto.customer;

public class CustomerTypeDto {
    private int id;
    private String name;
    private boolean isDelete;

    public CustomerTypeDto() {
    }

    public CustomerTypeDto(int id, String name, boolean isDelete) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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
