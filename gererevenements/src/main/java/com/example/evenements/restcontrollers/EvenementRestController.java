package com.example.evenements.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.evenements.entities.Evenement;
import com.example.evenements.service.EvenementService;
import org.springframework.web.bind.annotation.PutMapping;

// Annotation des web services
@RestController
// Pour accéder au web services de cette classe on va taper l'URL
@RequestMapping("/api")
// Sécurité
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class EvenementRestController {

    @Autowired
    EvenementService evenementService; 

    // Get all events
    @RequestMapping(path="all", method=RequestMethod.GET)
    public List<Evenement> getAllEvenement() {
        return evenementService.getAllEvenements();
    }

    // Get event by ID
    @RequestMapping(value="getbyid/{idEvenement}", method=RequestMethod.GET)
    //@GetMapping("getbyid/{idEvenement}")
    public Evenement getEvenementById(@PathVariable("idEvenement") Long id) {
        return evenementService.getEvenement(id);
    }

    // Create new event
    //@RequestMapping(path="addev",method=RequestMethod.POST)
    @PostMapping("/addev")
    @PreAuthorize("hasAuthority('ADMIN')")
    public Evenement createEvenement(@RequestBody Evenement evenement) {
        return evenementService.saveEvenemet(evenement);
    }

    // Update existing event
    @PutMapping("updateev/{idEvenement}") // Use PUT and specify the ID in the path
    public Evenement updateEvenement(@PathVariable("idEvenement") Long idEvenement, @RequestBody Evenement evenement) {
        evenement.setIdEvenement(idEvenement); // Set the ID to ensure the correct event is updated
        return evenementService.upadteEvenement(evenement);
    }

    // Delete event by ID
    @DeleteMapping("deleteev/{idEvenement}") // Corrected path variable
    public void deleteEvenement(@PathVariable("idEvenement") Long idEvenement) {
        evenementService.deleteEvenementById(idEvenement);
    }
    
    
    //ne fonctionne pas 
    @RequestMapping(value="/themes/{idTheme}", method=RequestMethod.GET)
    public List<Evenement> getEvenementByThemeId(@PathVariable("idTheme") Long idTheme) {
        return evenementService.findByThemeIdTheme(idTheme);
    }
    
    @RequestMapping(value="/evsByName/{nom}",method = RequestMethod.GET)
    public List<Evenement> findByNomEvenementContains(@PathVariable("nom") String nom) {
    	return evenementService.findByNomEvenementContains(nom);
    }
    
   
    
}
