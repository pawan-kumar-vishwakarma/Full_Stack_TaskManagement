package com.spring.TaskManagement.service;

import com.spring.TaskManagement.entity.Collage;
import com.spring.TaskManagement.repository.CollageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CollageService {

    @Autowired
    private CollageRepository collageRepository;

    public Collage saveCollage(Collage collage) {
        return collageRepository.save(collage);
    }

    public List<Collage> getAllCollage() {
        return collageRepository.findAll();
    }

    public Collage updateCollage(Collage collage) {
        Collage existing = collageRepository.findById(collage.getCollageid())
                .orElseThrow(() -> new RuntimeException("College not found"));
        existing.setName(collage.getName());
        existing.setCity(collage.getCity());
        existing.setSpecification(collage.getSpecification());
        return collageRepository.save(existing);
    }

    public Collage getCollageById(Integer id) {
        return collageRepository.findById(id).orElse(null);
    }

    public String deleteCollage(Integer id) {
        collageRepository.deleteById(id);
        return "Deleted: " + id;
    }
}