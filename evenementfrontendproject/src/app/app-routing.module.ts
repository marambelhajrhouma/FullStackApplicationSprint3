import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EvenementComponent} from './evenement/evenement.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { RechercheParThemeComponent } from './recherche-par-theme/recherche-par-theme.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeThemesComponent } from './liste-themes/liste-themes.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EvenementGuard } from './evenement.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "evenements", component : EvenementComponent},
  {path: "addEvenement", component:AddEvenementComponent,  canActivate:[EvenementGuard]},
  {path: "", redirectTo: "evenements", pathMatch:"full"},
  {path: "updateEvenement/:id", component: UpdateEvenementComponent, canActivate:[EvenementGuard]},
  {path: "RechercheParTheme", component: RechercheParThemeComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeThemes", component : ListeThemesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
