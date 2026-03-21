package com.spring.TaskManagement.controller;

import com.spring.TaskManagement.entity.Student;
import com.spring.TaskManagement.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/all")
    public List<Student> getAll() {
        return studentService.getAllStudents();
    }

    @PostMapping("/add/{collageid}")
    public ResponseEntity<Student> createStudent(@PathVariable Integer collageid, @Valid @RequestBody Student student) {
        Student savedStudent = studentService.addStudentToCollage(collageid, student);
        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStudentUsingId(@PathVariable Integer id) {
        try {
            String result = studentService.deleteStudentUsingId(id);
            return ResponseEntity.ok().body("{\"message\": \"" + result + "\"}");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"" + e.getMessage() + "\"}");
        }
    }

    @PutMapping("/update")
    public ResponseEntity<Student> updateStudent(@RequestBody Student student) {
        Student updated = studentService.updateStudent(student);
        return ResponseEntity.ok(updated);
    }

//    @DeleteMapping("/delete/{collageid}")
//    public String deleteStudent(@PathVariable Integer collageid) {
//        return studentService.deleteStudent(collageid);
//    }
}