package com.marveltech;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class MarvelTechApplication {

    public static void main(String[] args) {
        SpringApplication.run(MarvelTechApplication.class, args);
    }
}

@RestController
class HelloController {
    
    @GetMapping("/")
    public String hello() {
        return "Hello from Marvel Tech Backend!";
    }
    
    @GetMapping("/api/health")
    public String health() {
        return "Backend is running successfully!";
    }
}