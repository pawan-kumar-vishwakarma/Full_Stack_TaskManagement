package com.spring.TaskManagement.controller;

import com.spring.TaskManagement.entity.Collage;
import com.spring.TaskManagement.service.CollageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/collage")
public class CollageController {

    @Autowired
    private CollageService service;

    @PostMapping("/save")
    public Collage addCollage(@RequestBody Collage collage) {
        return service.saveCollage(collage);
    }

    @GetMapping("/all")
    public List<Collage> findAllCollage() {
        return service.getAllCollage();
    }

    @PutMapping("/update")
    public Collage updateCollage(@RequestBody Collage collage) {
        return service.updateCollage(collage);
    }

    @GetMapping("/{collageid}")
    public Collage getCollageById(@PathVariable Integer collageid) {
        return service.getCollageById(collageid);
    }

    @DeleteMapping("/delete/{collageid}")
    public String deleteCollage(@PathVariable Integer collageid) {
        return service.deleteCollage(collageid);
    }
}