package com.tsixe_sneila.java_course_capstonev1.Capstonev1.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tsixe_sneila.java_course_capstonev1.Capstonev1.DAO.SchedulerDAO;
import com.tsixe_sneila.java_course_capstonev1.Capstonev1.Exception.ResourceNotFoundException;
import com.tsixe_sneila.java_course_capstonev1.Capstonev1.Model.Scheduler;

@Service
public class SchedulerService {
	
	@Autowired
	private SchedulerDAO schedulerDAO;

	public List<Scheduler> findAll() {
		return schedulerDAO.findAll();
	}

	public Scheduler save(Scheduler scheduler) {
		return schedulerDAO.saveAndFlush(scheduler);
	}

	public Scheduler findById(Long id) {
		return schedulerDAO.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Scheduler not found with id: " + id));
	}
	
	public void delete(Scheduler scheduler) {
		schedulerDAO.delete(scheduler);
	}

}
