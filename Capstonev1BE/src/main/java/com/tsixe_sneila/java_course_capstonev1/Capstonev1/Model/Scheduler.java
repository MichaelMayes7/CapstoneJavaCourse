package com.tsixe_sneila.java_course_capstonev1.Capstonev1.Model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Scheduler {
	
	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	private boolean isWatered;
	private boolean isFertilized;
	private LocalDate lastWatered;
	private LocalDate nextWatered;
	private LocalDate lastFertilized;
	private LocalDate nextFertilized;
	
	
	@ManyToMany
	private List<Plant> plants;
	
	
	public Scheduler() {
		super();
	}
	
	
	
	public String getName() {
		return name;
	}


	


	public List<Plant> getPlants() {
		return plants;
	}



	public void setPlants(List<Plant> plants) {
		this.plants = plants;
	}



	public void setName(String name) {
		this.name = name;
	}





	public LocalDate getLastWatered() {
		return lastWatered;
	}



	public void setLastWatered(LocalDate lastWatered) {
		this.lastWatered = lastWatered;
	}



	public LocalDate getNextWatered() {
		return nextWatered;
	}



	public void setNextWatered(LocalDate nextWatered) {
		this.nextWatered = nextWatered;
	}



	public LocalDate getLastFertilized() {
		return lastFertilized;
	}



	public void setLastFertilized(LocalDate lastFertilized) {
		this.lastFertilized = lastFertilized;
	}



	public LocalDate getNextFertilized() {
		return nextFertilized;
	}



	public void setNextFertilized(LocalDate nextFertilized) {
		this.nextFertilized = nextFertilized;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public boolean isWatered() {
		return isWatered;
	}

	public void setWatered(boolean isWatered) {
		this.isWatered = isWatered;
	}

	public boolean isFertilized() {
		return isFertilized;
	}

	public void setFertilized(boolean isFertilized) {
		this.isFertilized = isFertilized;
	}
	
	

}
