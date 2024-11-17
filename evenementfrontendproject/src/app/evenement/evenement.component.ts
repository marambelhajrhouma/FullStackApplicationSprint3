import { Component } from '@angular/core';
import { Evenement } from '../models/evenement.model';
import { Image } from '../models/image.model';

import { EvenementService } from '../services/evenement.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrl: './evenement.component.css'
})
export class EvenementComponent {
  evenements: Evenement[] = [];

  apiurl:string='http://localhost:8083/themes/api';

  constructor(private evenementService: EvenementService, public authService: AuthService, private router: Router) { // Removed extra parenthesis
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
  
  /*  chargerEvenement() {
    this.evenementService.listeEvenement().subscribe(evs => {
      console.log(evs);
      this.evenements = evs;

      this.evenements.forEach((ev) => {
        this.evenementService.loadImage(ev.image.idImage)
          .subscribe((img: Image) => {
            ev.imageStr = 'data:' + img.type + ';base64,' + img.image;
          });
      });
    });
  }*/

    chargerEvenement() {
    this.evenementService.listeEvenement()
      .subscribe(evs => {
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
