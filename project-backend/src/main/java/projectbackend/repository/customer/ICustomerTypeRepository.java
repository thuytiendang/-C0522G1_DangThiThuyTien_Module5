package projectbackend.repository.customer;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.customer.CustomerType;

public interface ICustomerTypeRepository extends JpaRepository<CustomerType, Integer> {
}
