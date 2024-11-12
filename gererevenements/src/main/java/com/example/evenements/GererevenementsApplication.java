package com.example.evenements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.example.evenements.entities.Evenement;
import com.example.evenements.entities.Theme;

@SpringBootApplication
public class GererevenementsApplication implements CommandLineRunner{

	@Autowired
	private RepositoryRestConfiguration repositoryRestConfiguration;
	
	public static void main(String[] args) {
		SpringApplication.run(GererevenementsApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception{
		repositoryRestConfiguration.exposeIdsFor(Evenement.class, Theme.class);
	}

}
