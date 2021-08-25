package com.tsixe_sneila.java_course_capstonev1.Capstonev1.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tsixe_sneila.java_course_capstonev1.Capstonev1.Model.Plant;

public interface PlantDAO extends JpaRepository<Plant, Long> {

}
