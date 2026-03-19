package com.spring.TaskManagement.entity;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "collage")
public class Collage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer collageid;
    private String name;
    private String city;
    private String specification;

    @OneToMany(mappedBy = "collage", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Student> students;

    public Collage() {}

    public Integer getCollageid() { return collageid; }
    public void setCollageid(Integer collageid) { this.collageid = collageid; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    public String getSpecification() { return specification; }
    public void setSpecification(String specification) { this.specification = specification; }
    public List<Student> getStudents() { return students; }
    public void setStudents(List<Student> students) { this.students = students; }
}