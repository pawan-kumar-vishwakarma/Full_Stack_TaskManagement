package com.spring.TaskManagement.service;

import com.spring.TaskManagement.entity.Collage;
import com.spring.TaskManagement.entity.Student;
import com.spring.TaskManagement.repository.CollageRepository;
import com.spring.TaskManagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private CollageRepository collageRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll(org.springframework.data.domain.Sort.by(org.springframework.data.domain.Sort.Direction.ASC, "id"));
    }

    public Student addStudentToCollage(Integer collageid, Student student) {

        if (studentRepository.existsByEmail(student.getEmail())) {
            throw new RuntimeException("Email " + student.getEmail() + " is already exists..");
        }

        Collage collage = collageRepository.findById(collageid)
                .orElseThrow(() -> new RuntimeException("College not found"));
        student.setCollage(collage);
        return studentRepository.save(student);
    }

    public String deleteStudentUsingId(Integer studentId) {
        if (!studentRepository.existsById(studentId)) {
            throw new RuntimeException("Student not found with id: " + studentId);
        }
        studentRepository.deleteById(studentId);
        return "Student deleted successfully with ID: " + studentId;
    }

    public Student updateStudent(Student student) {
        Student existing = studentRepository.findById(student.getId())
                .orElseThrow(() -> new RuntimeException("Student not found"));
        existing.setName(student.getName());
        existing.setEmail(student.getEmail());
        existing.setContactNumber(student.getContactNumber());
        return studentRepository.save(existing);
    }
//    public String deleteStudent(Integer collageid) {
//        studentRepository.deleteById(collageid);
//        return "Student deleted associated with student ID " + collageid;
//    }
}