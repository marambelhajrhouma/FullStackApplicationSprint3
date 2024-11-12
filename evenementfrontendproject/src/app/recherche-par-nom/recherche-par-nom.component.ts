import { Component } from '@angular/core';
import { Evenement } from '../models/evenement.model';
import { EvenementService } from '../services/evenement.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent {
  nomEvenement!: string;
  evenements!: Evenement[];

  allEvenements!: Evenement[];
  
  searchTerm!: string;

  constructor(private evenementService: EvenementService){}

  ngOnInit():void{
    this.evenementService.listeEvenement().
    subscribe(prods => { 
      console.log(prods); 
    this.evenements = prods; });
  }

  rechercherEvenement(){
    this.evenementService.rechercheParNom(this.nomEvenement).
    subscribe(evs => { 
      this.evenements = evs; 
      console.log(evs)}
    );
  }

  //elle fait un filtrage il va lancer un filtrage lorsque vous taper un mot
  onKeyUp(filterText: string) {
    this.evenements = this.allEvenements.filter(item =>
      item.nomEvenement ? item.nomEvenement.toLowerCase().includes(filterText.toLowerCase()) : false
    );
  }
  

}
