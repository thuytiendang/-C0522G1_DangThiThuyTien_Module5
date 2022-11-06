package projectbackend.repository.ticket;

import org.springframework.data.jpa.repository.JpaRepository;
import projectbackend.model.ticket.Ticket;

public interface ITicketRepository extends JpaRepository<Ticket, Integer> {
}
