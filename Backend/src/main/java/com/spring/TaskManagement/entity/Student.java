package com.spring.TaskManagement.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;


@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank
    private String name;

    @Email
    @Column(unique = true, nullable = false)
    private String email;

    @Pattern(regexp = "^\\d{10}$", message = "Contact Number must be 10 digits")
    private String contactNumber;

    @ManyToOne
    @JoinColumn(name = "collageid")
    @JsonBackReference
    private Collage collage;

    @JsonProperty("collageId")
    public Integer getCollageId() {
        return (collage != null) ? collage.getCollageid() : null;
    }

    public Student() {}

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getContactNumber() { return contactNumber; }
    public void setContactNumber(String contactNumber) { this.contactNumber = contactNumber; }
    public Collage getCollage() { return collage; }
    public void setCollage(Collage collage) { this.collage = collage; }
}