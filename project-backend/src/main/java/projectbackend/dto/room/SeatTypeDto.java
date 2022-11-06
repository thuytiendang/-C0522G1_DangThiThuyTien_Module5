package projectbackend.dto.room;

public class SeatTypeDto {
    private int id;
    private String name;
    private int price;
    private boolean isDelete;

    public SeatTypeDto() {
    }

    public SeatTypeDto(int id, String name, int price, boolean isDelete) {
        this.id = id;
        this.name = name;
        this.price = price;
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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }
}
