import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Evenement } from '../models/evenement.model';
import { Theme } from '../models/theme.models';
import { Image } from '../models/image.model';

import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { ThemeWrapper } from '../models/ThemeWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) 
};
@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  evenements: Evenement[]=[];
  /* themes : Theme[]; */

  apiURL: string ='http://localhost:8083/themes/api';

  //URL de spring Data REST
  apiURLTheme: string='http://localhost:8083/themes/theme';

  constructor(private http: HttpClient,
              private authService: AuthService
  ) { 
    /* this.themes=[
      {idTheme : 1, nomTheme : "Carthage"},
      {idTheme : 2, nomTheme : "Hammmamet"}
    ]; */
   
    /*
    this.evenements = [
      { idEvenement: 1, nomEvenement: "PC Asus", prixEvenement: 3000.60, dateCreation: new Date("2011-01-14"), theme: {idTheme : 1, nomTheme : "Carthage"} },
      { idEvenement: 2, nomEvenement: "Imprimante Epson", prixEvenement: 450, dateCreation: new Date("2010-12-17") , theme: {idTheme : 2, nomTheme : "Hammmamet"}},
      { idEvenement: 3, nomEvenement: "Tablette Samsung", prixEvenement: 900.12, dateCreation: new Date("2020-02-20"), theme: {idTheme : 1, nomTheme : "Carthage"} }
    ];*/
  }

  /*
  listeEvenement():Evenement[] {
    return this.evenements;
  }*/

  listeEvenement(): Observable<Evenement[]>{ 
    return this.http.get<Evenement[]>(this.apiURL + "/all"); 
  }

  /*
  ajouterEvenement( ev: Evenement){ 
    this.evenements.push(ev); 
  }*/

  ajouterEvenement(ev: Evenement): Observable<Evenement> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.post<Evenement>(apiURL + "/addev", ev, { headers: httpHeaders });
  }
    
  /* supprimerEvenement( ev: Evenement){ 
    //supprimer le produit prod du tableau produits 
    const index = this.evenements.indexOf(ev, 0); 
    if (index > -1) { 
      this.evenements.splice(index, 1); 
    } 
    //ou Bien 
    /* this.produits.forEach((cur, index) => { 
    if(prod.idProduit === cur.idProduit) { 
    this.produits.splice(index, 1); 
    } 
    }); */ 
 // }  

  supprimerEvenement(id: number) {
    const url = `${apiURL}/deleteev/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.delete(url, { headers: httpHeaders });
  }

/*
  consulterEvenement(id: number):Evenement{
    return this.evenements.find(ev=> ev.idEvenement ==id )!;
  }*/

  consulterEvenement(id: number): Observable<Evenement> {
    const url = `${apiURL}/getbyid/${id}`;
          console.log(url);
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
            return this.http.get<Evenement>(url,{headers:httpHeaders});
  }

  trierProduits(){ 
    this.evenements = this.evenements.sort((n1,n2) => { 
      if (n1.idEvenement! > n2.idEvenement!) { 
        return 1; 
      } if (n1.idEvenement! < n2.idEvenement!) { 
        return -1;
      } return 0; 
    }); 
  }

  /*
  updateEvenement(ev: Evenement){
    //this.supprimerEvenement(ev);
    this.ajouterEvenement(ev);
    this.trierProduits();
  }*/

    updateEvenement(ev: Evenement): Observable<Evenement> {
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt });
      const url = `${this.apiURL}/updateev/${ev.idEvenement}`; // Include ID if needed
      return this.http.put<Evenement>(url, ev, { headers: httpHeaders });
  }
  

  /* listeThemes():Theme[] {
    return this.themes;
  }
  consulterTheme(id:number): Theme{
    return this.themes.find(theme => theme.idTheme == id)!;
    }   */
   //****Spring DataREST */ 
  rechercheParTheme(idTheme:number) :Observable<Evenement[]>{
    const url = `${this.apiURL}/themes/${idTheme}`; 
    return this.http.get<Evenement[]>(url);
  }

//le code de theme
  //****API REST */
  /*listeThemes():Observable<Theme[]>{
    return this.http.get<Theme[]>(apiURL+"/theme");
    }*/

   //****Spring DataREST */ 
  listeThemes(): Observable<ThemeWrapper> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })
    return this.http.get<ThemeWrapper>(this.apiURLTheme, { headers: httpHeaders });
  }

  rechercheParNom(nom: string): Observable<Evenement[]>{
    const url = `${this.apiURL}/evsByName/${nom}`;
    return this.http.get<Evenement[]>(url);
  }

  ajouterTheme( th: Theme):Observable<Theme>{
    return this.http.post<Theme>(this.apiURLTheme, th, httpOptions);
    }

  uploadImage(file: File, filename: string): Observable<Image> {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${apiURL + '/image/upload'}`;
    return this.http.post<Image>(url, imageFormData);
  }

  loadImage(id: number): Observable<Image> {
    const url = `${this.apiURL + '/image/get/info'}/${id}`;
    return this.http.get<Image>(url);
  }

  uploadImageEv(file: File, filename: string, idEv: number): Observable<any> { 
    const imageFormData = new FormData(); 
    imageFormData.append('image', file, filename); 
    const url = `${this.apiURL + '/image/uplaodImageEv'}/${idEv}`; 
    
    return this.http.post(url, imageFormData); 
  }

  supprimerImage(id : number) { 
    const url = `${this.apiURL}/image/delete/${id}`; 
    return this.http.delete(url, httpOptions); 
  }

  /******Les lignes de codes pour stocker une images dans le file imagesEvenements*******/
  /*uploadImageFS(file: File, filename: string, idEv : number): Observable<any>{ 
    const imageFormData = new FormData(); 
    
    imageFormData.append('image', file, filename); 
    const url = `${this.apiURL + '/image/uploadFS'}/${idEv}`; 
    
    return this.http.post(url, imageFormData); 
  }*/
 /**************** */

    
}
