package com.tsixe_sneila.java_course_capstonev1.Capstonev1.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tsixe_sneila.java_course_capstonev1.Capstonev1.DAO.PlantDAO;
import com.tsixe_sneila.java_course_capstonev1.Capstonev1.Exception.ResourceNotFoundException;
import com.tsixe_sneila.java_course_capstonev1.Capstonev1.Model.Plant;

@Service
public class PlantService {

	@Autowired
	private PlantDAO plantDAO;

	public List<Plant> findAll() {
		return plantDAO.findAll();
	}

	public Plant save(Plant plant) {
		return plantDAO.saveAndFlush(plant);
	}

	public Plant findById(Long id) {
		return plantDAO.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Plant not found with id: " + id));
	}

	public void delete(Plant plant) {
		plantDAO.delete(plant);
		
	}
	
	
}
