import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  
  constructor (private router: Router) {

  }
  
  canActivate(route: ActivatedRouteSnapshot) {
    const expectedRole = route.data.expectedRole;
    const currentRole = JSON.parse(localStorage.getItem('currentUser')).rol;

    if(currentRole != expectedRole || currentRole == null) {
      alert('usted no tiene permiso para ir a esa url')
      this.router.navigate(['home']);
      return false;
    } else {
      return true;
    }
  }
  
}
