package com.example.evenements.service;

import java.util.List;

import com.example.evenements.entities.Theme;

public interface ThemeService {
	Theme saveTheme(Theme th);
	Theme upadteTheme(Theme th);
	void deleteTheme(Theme th);
	void deleteThemeById(Long id);
	Theme getEvenement(Long id);
	List<Theme> getAllThemes();
}
