import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Theme } from '../models/theme.models';

@Component({
  selector: 'app-update-theme',
  templateUrl: './update-theme.component.html',
  styleUrl: './update-theme.component.css'
})
export class UpdateThemeComponent {
  @Input()
  theme!: Theme;

  @Output()
  themeUpdated = new EventEmitter<Theme>();

  @Input()
  ajout!:boolean;

  constructor(){}

  ngOnInit():void{
    console.log("ngOnInit du composant UpdateTheme ",this.theme);
  }

  saveTheme(){
    this.themeUpdated.emit(this.theme);
  }
}
