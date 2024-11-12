import { Component } from '@angular/core';
import { Theme } from '../models/theme.models';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-liste-themes',
  templateUrl: './liste-themes.component.html',
  styleUrl: './liste-themes.component.css'
})
export class ListeThemesComponent {
  themes! : Theme[];

  updatedTh: Theme = { idTheme: 0, nomTheme: "" };

  ajout:boolean=true;

  constructor(private evenementService : EvenementService) { }
  
  ngOnInit(): void {
    this.evenementService.listeThemes().subscribe(ths => {
      this.themes = ths._embedded.themes;
      console.log(ths);
    });
  }

  themeUpdated(th: Theme) {
    console.log(th);
    this.evenementService.ajouterTheme(th).
 subscribe( ()=> this.chargerThemes());
  }

  chargerThemes(){
    this.evenementService.listeThemes().
    subscribe(ths => {this.themes = ths._embedded.themes;
    console.log(ths);
    });
  }

  updateTheme(th:Theme) {
    this.updatedTh=th;
    this.ajout=false;
  }
    
}
