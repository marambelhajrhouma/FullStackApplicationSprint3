package com.example.evenements.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name="nomEvenement", types= {Evenement.class})
public interface EvenementProjection {
	public String getNomEvenement();
}
