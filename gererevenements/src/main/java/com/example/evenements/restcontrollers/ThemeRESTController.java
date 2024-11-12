package com.example.evenements.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.evenements.entities.Theme;
import com.example.evenements.repos.ThemeRepository;

@RestController
@RequestMapping("/api/theme")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class ThemeRESTController {

	@Autowired
    ThemeRepository themeRepository; 
    
    // Get all themes
    @RequestMapping(method = RequestMethod.GET)
    public List<Theme> getAllThemes() {
        return themeRepository.findAll();
    }
    
    // Get a theme by ID
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Theme getThemeById(@PathVariable("id") Long id) {
        return themeRepository.findById(id).orElse(null); // Use orElse(null) to handle cases when the theme is not found
    }
}