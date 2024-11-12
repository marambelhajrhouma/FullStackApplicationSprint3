import { Component } from '@angular/core';
import { Theme } from '../models/theme.models';
import { Evenement } from '../models/evenement.model';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-recherche-par-theme',
  templateUrl: './recherche-par-theme.component.html',
  styleUrl: './recherche-par-theme.component.css'
})
export class RechercheParThemeComponent {
  IdTheme!: number;
  themes!: Theme[];
  evenements!: Evenement[];

  constructor(private evenementService: EvenementService){}

  ngOnInit(){
    this.evenementService.listeThemes(). 
    subscribe(ths => {this.themes = ths._embedded.themes; 
      console.log(ths); 
    });
  }

  onChange():void{
    this.evenementService.rechercheParTheme(this.IdTheme). 
    subscribe(evs =>{this.evenements=evs});
  }
}
