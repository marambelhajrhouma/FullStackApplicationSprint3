import { Component } from '@angular/core';
import { Evenement } from '../models/evenement.model';
import { EvenementService } from '../services/evenement.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrl: './evenement.component.css'
})
export class EvenementComponent {
  evenements: Evenement[] =[];

  constructor(private evenementService: EvenementService, public authService : AuthService, private router : Router) { // Removed extra parenthesis
    //this.evenements = evenementService.listeEvenement();
  }

  ngOnInit(): void { 
    this.chargerEvenement();
  }

  /*
  supprimerEvenement(ev: Evenement) { 
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.evenementService.supprimerEvenement(ev);
  }*/
    chargerEvenement(){
      this.evenementService.listeEvenement().subscribe(evs => { 
        console.log(evs); 
        this.evenements = evs; 
      }); 
    }

    supprimerEvenement(ev: Evenement) { 
      let conf = confirm("Etes-vous sûr ?"); 
      if (conf) 
          this.evenementService.supprimerEvenement(ev.idEvenement).subscribe(() => { 
          console.log("evenement supprimé"); 
          this.chargerEvenement(); 
          //la mise à jou ça sera détecté par angular detection!
        }); 
      }



  
}
