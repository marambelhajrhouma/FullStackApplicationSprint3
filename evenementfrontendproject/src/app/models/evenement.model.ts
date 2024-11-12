import { Theme } from "./theme.models";

export class Evenement{
    idEvenement!: number; // ! ce champs peut etre vide
    nomEvenement!: string;
    prixEvenement!: number;
    dateEvenement!: Date;
    theme!: Theme;
}