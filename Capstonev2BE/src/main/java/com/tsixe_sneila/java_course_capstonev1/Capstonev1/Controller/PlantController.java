package com.tsixe_sneila.java_course_capstonev1.Capstonev1.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tsixe_sneila.java_course_capstonev1.Capstonev1.Model.Plant;
import com.tsixe_sneila.java_course_capstonev1.Capstonev1.Service.PlantService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class PlantController {
	
	@Autowired
	PlantService plantService;
	
	@RequestMapping("plants")
	public List<Plant> getPlants() {
		return plantService.findAll();
	}
	
	@PostMapping("plants")
	public Plant createStudent(@RequestBody Plant plant) {
		return plantService.save(plant);
	}
	
	@GetMapping("plants/{id}")
	public ResponseEntity<Plant> getPlantById(@PathVariable Long id) {
		Plant plant = plantService.findById(id);
		return ResponseEntity.ok(plant);
	}
	
	@PutMapping("plants/{id}")
	public ResponseEntity<Plant> updatePlant(@PathVariable Long id, @RequestBody Plant plantDetails) {
		
		//STEP ONE: QUERY PLANT RECORD FROM DB USING ID
		Plant plant = plantService.findById(id);
		
		//STEP TWO: UPDATE RETRIEVED PLANT WITH NEW PLANT DETAILS
		plant.setName(plantDetails.getName());
		plant.setAge(plantDetails.getAge());
		plant.setType(plantDetails.getType());
		plant.setSpecialInstructions(plantDetails.getSpecialInstructions());
		
		//STEP THREE: SAVE THE MODIFIED PLANT RECORD TO DB
		Plant updatedPlant = plantService.save(plant);
		
		//RETURN A RESPONSE CONTAINING OK AND THE UPDATED PLANT RECORD
		return ResponseEntity.ok(updatedPlant);	
		
	}
	
	@DeleteMapping("plants/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePlant(@PathVariable Long id) {
		
		//STEP ONE: RETRIEVE PLANT RECORD FROM THE DB USING ID
		Plant plant = plantService.findById(id);
		
		//STEP TWO: USE CALL SERVICE'S DELETE METHOD
		plantService.delete(plant);
		
		//STEP THREE: CREATE A HASHMAP TO HOLD RESPONSE (KEY) AND TRUE (VALUE)
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("Deleted Plant Id: " + id, Boolean.TRUE);
		
		// RETURN MAP INSIDE RESPONSE ENTITY
		return ResponseEntity.ok(response);
	}
	
//	@Scheduled(cron = "${cron.expression}")
//	public void scheduleTaskUsingCronExpression () {
//		long now = System.currentTimeMillis() / 1000;
//		System.out.println("schedule tasks using cron jobs - " + now);
//	}

}
