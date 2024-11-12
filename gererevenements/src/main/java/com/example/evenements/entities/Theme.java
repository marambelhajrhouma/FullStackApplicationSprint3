package com.example.evenements.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@NoArgsConstructor
@Entity
@AllArgsConstructor
public class Theme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTheme;
    private String nomTheme;
    private String descriptionTheme;

    
  //Association one to many
  	@OneToMany (mappedBy = "theme") //si on enlève cette ligne ça sera une 3 eme table qui constitue la relation entre les 2 tables 
  	@JsonIgnore //pour ne pas envoyer la liste des evenements
  	private List<Evenement> evenements;
  	

    // Constructors
  	public Theme(String nomTheme, String descriptionTheme) {
  	    this.nomTheme = nomTheme;
  	    this.descriptionTheme = descriptionTheme;
  	}

    //getters and setters
    
}
