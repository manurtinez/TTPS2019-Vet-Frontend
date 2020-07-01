import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  
  constructor (private router: Router) {

  }
  
  //deja pasar solo si el rol necesario coincide con el actual
  canActivate(route: ActivatedRouteSnapshot) {
    const expectedRoles: string[] = route.data.expectedRole;
    const currentRole: string = JSON.parse(localStorage.getItem('currentUser')).rol;

    if(!expectedRoles.includes(currentRole) || currentRole == null) {
      alert('usted no tiene permiso para ir a esa url')
      this.router.navigate(['home']);
      return false;
    } else {
      return true;
    }
  }
  
}
