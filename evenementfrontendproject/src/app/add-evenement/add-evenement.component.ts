import { Component } from '@angular/core';
import { Evenement } from '../models/evenement.model';
import { Image } from '../models/image.model';

import { EvenementService } from '../services/evenement.service';
import { Theme } from '../models/theme.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrl: './add-evenement.component.css'
})
export class AddEvenementComponent {
  newEvenement = new Evenement();
  message: string = "";
  themes!: Theme[];
  newIdTheme!: number;
  newTheme!: Theme;

  uploadedImage!: File;
  imagePath: any;

  constructor(private evenementService: EvenementService, private router :Router) {}

  ngOnInit() {
    //this.themes = this.evenementService.listeThemes();
    this.evenementService.listeThemes().
    subscribe(ths => {this.themes = ths._embedded.themes;
    console.log(ths);
    }); 
  }

    /*
  addEvenement(){ 
    console.log(this.newEvenement); 
    //this.newTheme=this.evenementService.consulterTheme(this.newIdTheme)
    //remplissage du champs
    this.newEvenement.theme=this.newTheme;
    this.evenementService.ajouterEvenement(this.newEvenement); 
    //this.message = "Événement " + this.newEvenement.nomEvenement + " ajouté avec succès!";
    this.router.navigate(['evenements']);
  }*/

/****le code de add evenement pour plusieurs photos */
/*addEvenement() {
    this.evenementService
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((img: Image) => {
        this.newEvenement.image = img;
        this.newEvenement.theme = this.themes.find(th => th.idTheme
          == this.newIdTheme)!;
        this.evenementService
          .ajouterEvenement(this.newEvenement)
          .subscribe(() => {
            this.router.navigate(['evenements']);
          });
      });
  }*/

      /***supp */ //recette categorie
      addEvenement() {
        this.newEvenement.theme = this.themes.find(th => th.idTheme == this.newIdTheme)!;
        this.evenementService.ajouterEvenement(this.newEvenement).subscribe((ev) => {
            if (this.uploadedImage) {
                this.evenementService.uploadImageEv(this.uploadedImage, this.uploadedImage.name, ev.idEvenement!)
                    .subscribe((response: any) => {
                        console.log("Image uploadée et associée à l'ingrédient", response);
                        this.router.navigate(['evenements']);
                    }, (error) => {
                        console.error("Erreur lors du téléchargement de l'image :", error);
                    });
            } else {
                this.router.navigate(['evenements']);
            }
        });
    }



  /******Les lignes de codes pour stocker une images dans le file imagesEvenements*******/
  /*addEvenement() {
    this.newEvenement.theme = this.themes.find(
      th => th.idTheme == this.newIdTheme)!;
    this.evenementService.ajouterEvenement(this.newEvenement)
      .subscribe((ev) => {
        this.evenementService.uploadImageFS(this.uploadedImage, this.uploadedImage.name, ev.idEvenement)
          .subscribe((response: any) => { });
        this.router.navigate(['evenements']);
      });
  }*/
  /*************** */
  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
  }

}
