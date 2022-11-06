package projectbackend.repository.customer;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.customer.Customer;

public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
}
