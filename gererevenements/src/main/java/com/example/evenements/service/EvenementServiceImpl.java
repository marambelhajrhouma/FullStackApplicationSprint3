package com.example.evenements.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import com.example.evenements.entities.Evenement;
import com.example.evenements.entities.Theme;
import com.example.evenements.repos.EvenementRepository;

@Service
public class EvenementServiceImpl implements EvenementService{

	@Autowired
	EvenementRepository evenementRepository;
	
	//@PreAuthorize("hasAuthority('ADMIN')")
	@Override
	public Evenement saveEvenemet(Evenement ev) {
		
		return evenementRepository.save(ev) ;
	}

	@Override
	public Evenement upadteEvenement(Evenement ev) {
		return evenementRepository.save(ev) ;
	}

	@Override
	public void deleteEvenement(Evenement ev) {
		evenementRepository.delete(ev) ;	
	}

	@Override
	public void deleteEvenementById(Long id) {
		evenementRepository.deleteById(id) ;
	}

	@Override
	public Evenement getEvenement(Long id) {
		return evenementRepository.findById(id).get() ;
	}

	@Override
	public List<Evenement> getAllEvenements() {
		return evenementRepository.findAll() ;
	}

	
	//new
	@Override
	public List<Evenement> findByNomEvenement(String nom) {
		
		return evenementRepository.findByNomEvenement(nom);
	}

	@Override
	public List<Evenement> findByNomEvenementContains(String nom) {
		// TODO Auto-generated method stub
		return evenementRepository.findByNomEvenementContains(nom);
	}

	@Override
	public List<Evenement> findByNomPrix(String nom, Double prix) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Evenement> findByTheme(Theme th) {
		// TODO Auto-generated method stub
		return evenementRepository.findByTheme(th);
	}

	@Override
	public List<Evenement> findByThemeIdTheme(Long id) {
		// TODO Auto-generated method stub
		return evenementRepository.findByThemeIdTheme(id);
	}

	@Override
	public List<Evenement> findByOrderByNomEvenementAsc() {
		// TODO Auto-generated method stub
		return evenementRepository.findByOrderByNomEvenementAsc();
	}

	@Override
	public List<Evenement> trierEvenementsNomsPrix() {
		// TODO Auto-generated method stub
		return evenementRepository.trierEvenementNomPrix();
	}

}
