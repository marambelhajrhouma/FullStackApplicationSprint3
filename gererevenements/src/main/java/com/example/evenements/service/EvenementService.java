package com.example.evenements.service;

import com.example.evenements.entities.Evenement;
import com.example.evenements.entities.Theme;

import java.util.List;

public interface EvenementService {
	Evenement saveEvenemet(Evenement ev);
	Evenement upadteEvenement(Evenement ev);
	void deleteEvenement(Evenement ev);
	void deleteEvenementById(Long id);
	Evenement getEvenement(Long id);
	List<Evenement> getAllEvenements();
	
	
	List<Evenement> findByNomEvenement(String nom);
	List<Evenement> findByNomEvenementContains(String nom);
	List<Evenement> findByNomPrix (String nom, Double prix);
	List<Evenement> findByTheme (Theme th);
	List<Evenement> findByThemeIdTheme(Long id);
	List<Evenement> findByOrderByNomEvenementAsc();
	List<Evenement> trierEvenementsNomsPrix();
	
}
