package com.example.evenements.service;

import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;
import com.example.evenements.entities.Image;

public interface ImageService {
	Image uplaodImage(MultipartFile file) throws IOException;

	Image getImageDetails(Long id) throws IOException;

	ResponseEntity<byte[]> getImage(Long id) throws IOException;

	void deleteImage(Long id);
	
	Image uplaodImageEv(MultipartFile file,Long idEv) throws IOException; 
	List<Image> getImagesParEv(Long evId);
}
