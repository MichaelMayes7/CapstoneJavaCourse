package com.tsixe_sneila.java_course_capstonev1.Capstonev1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller
@RequestMapping("/")
public class Capstonev1Application {

	public static void main(String[] args) {
		SpringApplication.run(Capstonev1Application.class, args);
	}
	
	@GetMapping
	public String index() {
		return "index.html";
	}

}
