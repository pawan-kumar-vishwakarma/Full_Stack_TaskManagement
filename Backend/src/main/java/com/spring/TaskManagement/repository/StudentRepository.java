package com.spring.TaskManagement.repository;

import com.spring.TaskManagement.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {
    boolean existsByEmail(String email);
}
