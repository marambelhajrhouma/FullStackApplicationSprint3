import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from '../models/evenement.model';
import { EvenementService } from '../services/evenement.service';
import { Theme } from '../models/theme.models';
import { Image } from '../models/image.model';


@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrl: './update-evenement.component.css'
})
export class UpdateEvenementComponent {
  currentEvenement = new Evenement();
  themes!: Theme[];
  updateThemeId!: number;

  myImage!: string;

  uploadedImage!: File;
  isImageUpdated: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private evenementService: EvenementService) {

  }

  /*
  ngOnInit() { 
   //remplir le tableau themes de toutes les themes dispo
  /*  this.themes = this.evenementService.listeThemes(); */

  //console.log(this.activatedRoute);

  //pour voir l'id dans le snapshot plus précisémet dans le params
  //console.log(this.activatedRoute.snapshot.params['id']); 
  //this.currentEvenement = this.evenementService.consulterEvenement(this.activatedRoute.snapshot. params['id']); 

  //la liste contient tjrs le theme du theme que je vais le modifié
  //this.updateThemeId=this.currentEvenement.theme.idTheme;
  //console.log(this.currentEvenement);


  /* this.evenementService.listeThemes().
   subscribe(ths => {this.themes = ths._embedded.themes;
   console.log(ths);
   });

   this.evenementService.consulterEvenement(this.activatedRoute.snapshot.params['id']).
   subscribe( ev =>{ this.currentEvenement = ev;
                     this.updateThemeId= this.currentEvenement.theme.idTheme;

                     this.evenementService .loadImage(
                         this.currentEvenement.image.idImage) 
                         .subscribe((img: Image) => { 
                           this.myImage = 'data:' + img.type + ';base64,' + img.image; 
                     });
                   } 
             ) ;
   }*/

  ngOnInit(): void {
    this.evenementService.listeThemes()
      .subscribe(ths => {
        this.themes = ths._embedded.themes;
      });
    this.evenementService.consulterEvenement(this.activatedRoute.snapshot.params['id'])
      .subscribe(ev => {
        this.currentEvenement = ev;
        this.updateThemeId = ev.theme.idTheme;
      });
  }

  /*
  updateEvenement(){
    //this.currentEvenement.theme=this.evenementService.consulterTheme(this.updateThemeId);
    //console.log(this.currentEvenement);
    this.evenementService.updateEvenement(this.currentEvenement);
    this.router.navigate(['evenements']);
  }*/


  /*****that i put it first version */
  /*updateEvenement() {

    this.currentEvenement.theme = this.themes.
      find(th => th.idTheme == this.updateThemeId)!;

    this.evenementService.updateEvenement(this.currentEvenement).
      subscribe(ev => { this.router.navigate(['evenements']); }
      );
  }*/

  /*
updateEvenement() {
this.currentEvenement.theme = this.themes.find(th => th.idTheme == this.updateThemeId)!;
//tester si l'image du produit a été modifiée 
if (this.isImageUpdated) {
  this.evenementService.uploadImage(this.uploadedImage, this.uploadedImage.name)
    .subscribe((img: Image) => {
      this.currentEvenement.image = img;
      this.evenementService.updateEvenement(this.currentEvenement)
        .subscribe((ev) => {
          this.router.navigate(['evenements']);
        });
    });
} else {
  this.evenementService.updateEvenement(this.currentEvenement)
    .subscribe((ev) => {
      this.router.navigate(['evenements']);
    });
}
}*/

  updateEvenement() { 
    this.currentEvenement.theme = this.themes.find(th => 
      th.idTheme == this.updateThemeId)!; 
      this.evenementService.updateEvenement(this.currentEvenement)
      .subscribe((ev) => { 
        this.router.navigate(['evenements']); 
      }); 
  }


  onImageUpload(event: any) {
    if (event.target.files && event.target.files.length) {
      this.uploadedImage = event.target.files[0];
      this.isImageUpdated = true;

      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = () => {
        this.myImage = reader.result as string;
      };
    }
  }

  onAddImageEvenement() {
    this.evenementService.uploadImageEv(this.uploadedImage, this.uploadedImage.name, this.currentEvenement.idEvenement)
      .subscribe((img: Image) => {
        this.currentEvenement.images.push(img);
      });
  }

  supprimerImage(img: Image) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) this.evenementService.supprimerImage(img.idImage)
      .subscribe(() => {
        //supprimer image du tableau currentEvenement.images
        const index = this.currentEvenement.images.indexOf(img, 0);
        if (index > -1) {
          this.currentEvenement.images.splice(index, 1);
        }
      });
  }
}
