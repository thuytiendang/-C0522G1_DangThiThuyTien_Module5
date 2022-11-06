package projectbackend.repository.decentralization;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.decentralization.User;

public interface IUserRepository extends JpaRepository<User, Integer> {
}
