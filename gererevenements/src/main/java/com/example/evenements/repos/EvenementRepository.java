package com.example.evenements.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.evenements.entities.Evenement;
import com.example.evenements.entities.Theme;

@RepositoryRestResource(path= "rest")
public interface EvenementRepository extends JpaRepository<Evenement, Long> {
	
	List<Evenement> findByNomEvenement(String nom);
	
	// spring va comprendre que spring cherche les participants ont le nom ...
	List<Evenement> findByNomEvenementContains(String nom);
	
	/*
	//On a utiler les paramètres positionnels 
	@Query("select ev from Evenement ev where ev.nomEvenement like %?1 and ev.prixEvenement > ?2")
	List<Evenement> findByNomPrix (String nom, Double prix);
	*/
	
	//les paramètres nommées @param
	@Query("select ev from Evenement ev where ev.nomEvenement like %:nom% and ev.prixEvenement > :prix")
	List<Evenement> findByNomPrix(@Param("nom") String nom, @Param("prix") Double prix);

	//Ecrire des requêtes @Query en passant des entités en paramètre
	@Query("select ev from Evenement ev where ev.theme= ?1")
	List<Evenement> findByTheme(Theme theme);
	

	List<Evenement> findByThemeIdTheme(Long idTheme);
	
	//ASC= ordre croissant //DESC décroissant
	List<Evenement> findByOrderByNomEvenementAsc();
	
	//DESC décroissant
	@Query("select e from Evenement e order by e.nomEvenement ASC, e.prixEvenement DESC")
	List<Evenement> trierEvenementNomPrix();
	
}
