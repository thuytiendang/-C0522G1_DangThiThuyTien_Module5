package projectbackend.dto.room;

public class SeatTypeDto {
    private Integer id;
    private String name;
    private Integer price;
    private boolean isDelete;

    public SeatTypeDto() {
    }

    public SeatTypeDto(Integer id, String name, Integer price, boolean isDelete) {
        this.id = id;
        this.name = name;
        this.price = price;
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

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }
}
