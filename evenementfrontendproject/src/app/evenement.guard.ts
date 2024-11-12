import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate , RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EvenementGuard implements CanActivate {
 
  constructor (private authService: AuthService,
    private router : Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.authService.isAdmin())
      return true;
    else {
      this.router.navigate(['app-forbidden']);
      return false;
    }
  }
}