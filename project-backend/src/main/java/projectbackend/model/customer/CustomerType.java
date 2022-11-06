package projectbackend.model.customer;

import projectbackend.model.promotion.PromotionDetail;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CustomerType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private boolean isDelete;

    @OneToMany(mappedBy = "customerType")
    private Set<Customer> customers;

    @OneToMany(mappedBy = "customerType")
    private Set<PromotionDetail> promotionDetails;

    public CustomerType() {
    }

    public CustomerType(int id, String name, boolean isDelete, Set<Customer> customers, Set<PromotionDetail> promotionDetails) {
        this.id = id;
        this.name = name;
        this.isDelete = isDelete;
        this.customers = customers;
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

    public Set<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(Set<Customer> customers) {
        this.customers = customers;
    }

    public Set<PromotionDetail> getPromotionDetails() {
        return promotionDetails;
    }

    public void setPromotionDetails(Set<PromotionDetail> promotionDetails) {
        this.promotionDetails = promotionDetails;
    }
}
