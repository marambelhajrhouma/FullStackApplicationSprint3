package com.example.evenements.repos;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.evenements.entities.Image;
public interface ImageRepository extends JpaRepository<Image, Long> {
	/*@Query("SELECT i FROM Image i JOIN i.evenement ing WHERE ing.id = :id")
	List<Image> findImagesByIngredientId(@Param("id") Long id);*/
}

