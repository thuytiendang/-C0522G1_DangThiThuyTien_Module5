package projectbackend.repository.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.employee.Employee;

public interface IEmployeeRepository extends JpaRepository<Employee, Integer> {
}
