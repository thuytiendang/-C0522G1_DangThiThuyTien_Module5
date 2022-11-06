package projectbackend.repository.decentralization;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.decentralization.Role;

public interface IRoleRepository extends JpaRepository<Role, Integer> {
}
