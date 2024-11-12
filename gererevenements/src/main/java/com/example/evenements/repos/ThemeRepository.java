package com.example.evenements.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.evenements.entities.Theme;
import com.example.evenements.entities.Evenement;

import java.util.List;

@RepositoryRestResource(path="theme")
@CrossOrigin(origins="http://localhost:4200/") //pour autoriser angular
public interface ThemeRepository extends JpaRepository<Theme, Long> {

	/*
    // Trouver les thèmes par nom
    List<Theme> findByNomTheme(String nom);

    // Recherche partielle du nom du thème (avec un nom qui contient une chaîne de caractères)
    List<Theme> findByNomThemeContains(String nom);

    // Query personnalisée pour rechercher les événements liés à un thème spécifique (selon le nom de l'événement)
    @Query("select p from Evenement p where p.nomEvenement like %?1%")
    List<Evenement> findEvenementsByNomEvenement(String nom);
*/
	
	
}
