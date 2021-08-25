package com.tsixe_sneila.java_course_capstonev1.Capstonev1.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tsixe_sneila.java_course_capstonev1.Capstonev1.Model.Scheduler;
import com.tsixe_sneila.java_course_capstonev1.Capstonev1.Service.SchedulerService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class SchedulerController {
	
	@Autowired
	SchedulerService schedulerService;
	
	@RequestMapping("schedulers")
	public List<Scheduler> getSchedulers() {
		return schedulerService.findAll();
	}
	
	@PostMapping("schedulers")
	public Scheduler createScheduler(@RequestBody Scheduler scheduler) {
		return schedulerService.save(scheduler);
	}
	
	@GetMapping("schedulers/{id}") 
	public ResponseEntity<Scheduler> getSchedulerById(@PathVariable Long id) {
		Scheduler scheduler = schedulerService.findById(id);
		return ResponseEntity.ok(scheduler);
	}
	
	@PutMapping("schedulers/{id}")
	public ResponseEntity<Scheduler> updateScheduler(@PathVariable Long id, @RequestBody Scheduler schedulerDetails) {
		
		Scheduler scheduler = schedulerService.findById(id);
		
		scheduler.setWatered(schedulerDetails.isWatered());
		scheduler.setFertilized(schedulerDetails.isFertilized());
		scheduler.setLastWatered(schedulerDetails.getLastWatered());
		scheduler.setNextWatered(schedulerDetails.getNextWatered());
		scheduler.setLastFertilized(schedulerDetails.getLastFertilized());
		scheduler.setNextFertilized(schedulerDetails.getNextFertilized());
		
		Scheduler updatedScheduler = schedulerService.save(scheduler);
		
		return ResponseEntity.ok(updatedScheduler);
	}
	
	@DeleteMapping("schedulers/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteScheduler(@PathVariable Long id) {
		
		Scheduler scheduler = schedulerService.findById(id);
		
		schedulerService.delete(scheduler);
		
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("Deleted Scheduler Id: " + id, Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}

}
