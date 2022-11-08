package projectbackend.dto.promotion;

public class PromotionDto {
    private Integer id;
    private String name;
    private boolean isDelete;
    private String image;
    private String startTime;
    private String endTime;
    private String detail;
    private String discount;

    public PromotionDto() {
    }

    public PromotionDto(Integer id, String name, boolean isDelete, String image, String startTime, String endTime,
                        String detail, String discount) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
        this.image = image;
        this.startTime = startTime;
        this.endTime = endTime;
        this.detail = detail;
        this.discount = discount;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getDiscount() {
        return discount;
    }

    public void setDiscount(String discount) {
        this.discount = discount;
    }
}
