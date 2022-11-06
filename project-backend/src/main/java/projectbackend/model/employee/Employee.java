package projectbackend.model.employee;

import projectbackend.model.movie.Movie;
import projectbackend.model.decentralization.User;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private Number gender;
    private String email;
    private String address;
    private String phoneNumber;
    private String idCard;
    private String dayOfBirth;
    private String image;
    private boolean isDelete;

    @OneToOne
    @JoinColumn(name = "user_name", referencedColumnName = "userName")
    private User user;

    @OneToMany(mappedBy = "employee")
    private Set<Movie> movies;

    public Employee() {
    }

    public Employee(int id, String name, Number gender, String email, String address, String phoneNumber, String idCard,
                    String dayOfBirth, String image, boolean isDelete, User user, Set<Movie> movies) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.idCard = idCard;
        this.dayOfBirth = dayOfBirth;
        this.image = image;
        this.isDelete = isDelete;
        this.user = user;
        this.movies = movies;
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

    public Number getGender() {
        return gender;
    }

    public void setGender(Number gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getDayOfBirth() {
        return dayOfBirth;
    }

    public void setDayOfBirth(String dayOfBirth) {
        this.dayOfBirth = dayOfBirth;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Movie> getMovies() {
        return movies;
    }

    public void setMovies(Set<Movie> movies) {
        this.movies = movies;
    }
}