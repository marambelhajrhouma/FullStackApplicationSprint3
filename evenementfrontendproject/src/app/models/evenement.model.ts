import { Theme } from "./theme.models";
import { Image } from "./image.model";

export class Evenement{
    idEvenement!: number; // ! ce champs peut etre vide
    nomEvenement!: string;
    prixEvenement!: number;
    dateEvenement!: Date;
    theme!: Theme;
    image! : Image;
    imageStr!:string;

    images!: Image[];
}