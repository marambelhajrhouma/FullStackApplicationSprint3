import { Component } from '@angular/core';
import { Evenement } from '../models/evenement.model';
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

    addEvenement(){ 
      
      //je vais cherecher l'id de theme choisi par l'utilisateur
      this.newEvenement.theme = this.themes.find(th => th.idTheme == this.newIdTheme)!;
      this.evenementService.ajouterEvenement(this.newEvenement) 
      .subscribe(ev => { 
        console.log(ev); 
        this.router.navigate(['evenements']);
      }); 
    }

}
