package kz.khan.eschool.controllers;

import kz.khan.eschool.models.Student;
import kz.khan.eschool.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/students")
    public List<Student> getStudents(Model model){

        return studentRepository.findAll();
    }

    @PostMapping("/students")
    public void addStudent(@RequestBody Student student){
        studentRepository.insert(student);
    }

    @DeleteMapping("/students/{id}")
    public void deleteStudent(@PathVariable Long id){
        studentRepository.deleteById(id);
    }
}
