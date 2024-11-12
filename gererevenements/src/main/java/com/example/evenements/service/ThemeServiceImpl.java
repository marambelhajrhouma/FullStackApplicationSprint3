package com.example.evenements.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.evenements.entities.Theme;
import com.example.evenements.repos.ThemeRepository;

@Service
public class ThemeServiceImpl implements ThemeService { // Change to class

    @Autowired
    ThemeRepository themeRepository;

    @Override
    public Theme saveTheme(Theme th) {
        return themeRepository.save(th);
    }

    @Override
    public Theme upadteTheme(Theme th) { // Typo fixed
        return themeRepository.save(th);
    }

    @Override
    public void deleteTheme(Theme th) {
        themeRepository.delete(th);
    }

    @Override
    public void deleteThemeById(Long id) {
        themeRepository.deleteById(id);
    }

    @Override
    public Theme getEvenement(Long id) { // Changed method name to match entity
        return themeRepository.findById(id).orElseThrow(() -> new RuntimeException("Theme not found")); // Optional handling
    }

    @Override
    public List<Theme> getAllThemes() {
        return themeRepository.findAll();
    }
}
