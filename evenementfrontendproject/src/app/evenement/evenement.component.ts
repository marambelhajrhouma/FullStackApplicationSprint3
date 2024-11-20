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
  
  /****le code de add evenement pour plusieurs photos */
  /*chargerEvenement() {
    this.evenementService.listeEvenement().subscribe(evs => {
      console.log(evs);
      this.evenements = evs;

      this.evenements.forEach((ev) => {
        this.evenementService.loadImage(ev.image.idImage)
          .subscribe((img: Image) => {
            //ev.imageStr = 'data:' + img.type + ';base64,' + img.image;
            //ev.imageStr = 'data:' + img.type + ';base64,' + img.image;
            //ev.imageStr = 'data:' + ev.images[0].type + ';base64,' +  ev.images[0].image;
          });
          
          ev.imageStr = 'data:' + ev.images[0].type + ';base64,' +  ev.images[0].image;
           
      });
    });
  }*/
    /*chargerEvenement() {
      this.evenementService.listeEvenement().subscribe(evs => {
        console.log(evs);
        this.evenements = evs;
        this.evenements.forEach((ev) => {
          ev.imageStr = 'data:' + ev.images[0].type + ';base64,' + ev.images[0].image;
        });
      });
    }*/
      chargerEvenement() {
        this.evenementService.listeEvenement().subscribe(evs => {
          console.log(evs);
          this.evenements = evs;
          this.evenements.forEach((ev) => {
            // Check if images array exists and has at least one element
            if (ev.images && ev.images.length > 0 && ev.images[0]) {
              ev.imageStr = 'data:' + ev.images[0].type + ';base64,' + ev.images[0].image;
            } else {
              // Set a default image or placeholder if no image is available
              ev.imageStr = 'assets/default-image.png'; // or any default image path
              console.log(`No image found for event: ${ev.nomEvenement}`);
            }
          });
        });
      }

 //supp
/* chargerIngredients(): void {
  this.evenementService.listeEvenement().subscribe((evs) => {
    this.evenements = evs;

    // Fetch image for each ingredient
    this.evenements?.forEach((ev) => {
      if (ev.idEvenement) {
        this.evenementService
          .loadImage(ev.idEvenement)
          .subscribe((img: Image[]) => {
            // Check if an image is available
            if (img.length > 0) {
              ev.imageStr =
                'data:' + img[0].type + ';base64,' + img[0].image;
            } else {
              ev.imageStr = ''; // Initialize with empty string if no image
              console.log(
                `No image found for ingredient ${ev.nomEvenement}`
              );
            }
          });
      }
    });
  });
}*/

  /******Les lignes de codes pour stocker une images dans le file imagesEvenements*******/
    /*chargerEvenement() {
    this.evenementService.listeEvenement()
      .subscribe(evs => {
        this.evenements = evs;
      });
    }*/

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
