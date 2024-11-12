import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementComponent } from './evenement/evenement.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { ThemeComponent } from './theme/theme.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParThemeComponent } from './recherche-par-theme/recherche-par-theme.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeThemesComponent } from './liste-themes/liste-themes.component';
import { UpdateThemeComponent } from './update-theme/update-theme.component';
import { LoginComponent } from './login/login.component';
import { EvenementService } from './services/evenement.service';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './services/token.interceptor';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EvenementGuard } from './evenement.guard';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    EvenementComponent,
    AddEvenementComponent,
    UpdateEvenementComponent,
    ThemeComponent,
    RechercheParThemeComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeThemesComponent,
    UpdateThemeComponent,
    LoginComponent,
    ForbiddenComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    EvenementService,
    AuthService,
    EvenementGuard,
    { provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
