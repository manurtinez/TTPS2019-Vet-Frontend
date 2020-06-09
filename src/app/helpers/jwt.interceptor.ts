import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router';

@Injectable
({ providedIn: 'root'})
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  public jwthelper: JwtHelperService = new JwtHelperService();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const currentUser = this.authenticationService.currentUserValue;
    // if (currentUser && currentUser.token) {
    //   try {
    //     if (this.jwthelper.isTokenExpired(currentUser.token)) {
    //       alert('la sesion ha expirado, por favor inicie sesion de nuevo');
    //       this.router.navigate(['login']);
    //     }
    //   }
    //   catch(Error) {
    //     alert('hubo algun problema con la sesion');
    //   }
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${currentUser.token}`
    //     }
    //   });
    // }
    return next.handle(request);
  }
}
