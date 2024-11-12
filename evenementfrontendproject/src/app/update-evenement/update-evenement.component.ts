import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from '../models/evenement.model';
import { EvenementService } from '../services/evenement.service';
import { Theme } from '../models/theme.models';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrl: './update-evenement.component.css'
})
export class UpdateEvenementComponent {
  currentEvenement= new Evenement();
  themes!:Theme[];
  updateThemeId! : number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,private evenementService: EvenementService) {
    
   }

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

    this.evenementService.listeThemes().
    subscribe(ths => {this.themes = ths._embedded.themes;
    console.log(ths);
    });

    this.evenementService.consulterEvenement(this.activatedRoute.snapshot.params['id']).
    subscribe( ev =>{ this.currentEvenement = ev;
                      this.updateThemeId= this.currentEvenement.theme.idTheme;
                    } 
              ) ;
    
    }

  /*
  updateEvenement(){
    //this.currentEvenement.theme=this.evenementService.consulterTheme(this.updateThemeId);
    //console.log(this.currentEvenement);
    this.evenementService.updateEvenement(this.currentEvenement);
    this.router.navigate(['evenements']);
  }*/


  updateEvenement(){

    this.currentEvenement.theme = this.themes.
    find(th => th.idTheme == this.updateThemeId)!;

    this.evenementService.updateEvenement(this.currentEvenement).
    subscribe(ev => { this.router.navigate(['evenements']); } 
  ); 
}
}
