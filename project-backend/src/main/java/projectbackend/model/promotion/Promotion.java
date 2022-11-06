package projectbackend.model.promotion;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Promotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private boolean isDelete;
    private String image;
    private String startTime;
    private String endTime;
    private String detail;
    private String discount;

    @OneToMany(mappedBy = "promotion")
    private Set<PromotionDetail> promotionDetails;

    public Promotion() {
    }

    public Promotion(int id, String name, boolean isDelete, String image, String startTime,
                     String endTime, String detail, String discount, Set<PromotionDetail> promotionDetails) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
        this.image = image;
        this.startTime = startTime;
        this.endTime = endTime;
        this.detail = detail;
        this.discount = discount;
        this.promotionDetails = promotionDetails;
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

    public Set<PromotionDetail> getPromotionDetails() {
        return promotionDetails;
    }

    public void setPromotionDetails(Set<PromotionDetail> promotionDetails) {
        this.promotionDetails = promotionDetails;
    }
}
