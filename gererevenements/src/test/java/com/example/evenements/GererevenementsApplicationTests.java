package com.example.evenements;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.evenements.entities.Evenement;
import com.example.evenements.entities.Theme;
import com.example.evenements.repos.EvenementRepository;

@SpringBootTest
class GererevenementsApplicationTests {

	@Autowired 
	//@Autowired: Pour faire l'injection des dépendances (=ioc) de l'interface "EvenementRepository"
	private EvenementRepository evenementRepository;
	
	@Test
	public void testCreateEvenement() { 
		Evenement ev = new Evenement("Carthage culture", "musique", 34.00, new Date());
		evenementRepository.save(ev);
	}
	
	@Test 
	public void testFindEvenement() {
		//1L pourque java le connettre que c'est une long
		Evenement ev= evenementRepository.findById(3L).get();
		System.out.println(ev);
	}
	
	@Test 
	public void testUpadteEvenement() {
		//1L pourque java le connettre que c'est une long
		Evenement ev= evenementRepository.findById(3L).get();
		ev.setNomEvenement("seminaire");;
		evenementRepository.save(ev);
		System.out.println(ev);
	}
	
	@Test 
	public void testDeleteEvenement() {
		evenementRepository.deleteById(2L);
	}
	
	@Test 
	public void testFindAllEvenement() {
		List<Evenement> evs=evenementRepository.findAll();
		
		for (Evenement p: evs)
			System.out.println(p);
	}
	
	/**********/
	@Test 
	public void testFindEvenementByNom() {
		//1L pourque java le connettre que c'est une long
		List<Evenement> evs= evenementRepository.findByNomEvenement("seminaire");
		for (Evenement p: evs)
			System.out.println(p);
	}
	
	
	@Test 
	public void findByNomEvenementContains() {
		//1L pourque java le connettre que c'est une long
		List<Evenement> evs= evenementRepository.findByNomEvenementContains("r");
		for (Evenement p: evs)
			System.out.println(p);
	}
	
	@Test
	public void testfindByNomPrix()
	{
		List<Evenement> evs = evenementRepository.findByNomPrix("seminaire", 60.0);
		for (Evenement p : evs)
		{
			System.out.println(p);
		}
	}
	
	//Ne fonctionne pas tu dois résolu le problème de l'id
	@Test
	public void testfindByTheme()
	{
		Theme th = new Theme();
		th.setIdTheme(1L);
		
		List<Evenement> evs = evenementRepository.findByTheme(th);
		for (Evenement p : evs)
		{
			System.out.println(p);
		}
		
	}
	
	//Ne fonctionne pas tu dois résolu le problème de l'id
	@Test
	public void testfindByThemeIdTheme() {
        List<Evenement> evs = evenementRepository.findByThemeIdTheme(2L);
        System.out.println("farah");
        for (Evenement p : evs) {
            System.out.println("maram"+p);
        }
    }
	
	@Test
	public void testfindByOrderByNomEvenementAsc()
	{
		List<Evenement> evs = evenementRepository.findByOrderByNomEvenementAsc();
		for (Evenement p : evs)
		{
			System.out.println(p);
		}
	
	}
	
	@Test
	public void testtrierEvenementNomPrix()
	{
		List<Evenement> evs = evenementRepository.trierEvenementNomPrix();
		for (Evenement p : evs)
		{
			System.out.println(p);
		}
	
	}
	


}
