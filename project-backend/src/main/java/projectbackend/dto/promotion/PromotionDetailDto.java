package projectbackend.dto.promotion;

import projectbackend.model.customer.CustomerType;
import projectbackend.model.promotion.Promotion;

public class PromotionDetailDto {
    private Integer id;
    private boolean isDelete;
    private Promotion promotion;
    private CustomerType customerType;

    public PromotionDetailDto() {
    }

    public PromotionDetailDto(Integer id, boolean isDelete, Promotion promotion, CustomerType customerType) {
        this.id = id;
        this.isDelete = isDelete;
        this.promotion = promotion;
        this.customerType = customerType;
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

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }
}
