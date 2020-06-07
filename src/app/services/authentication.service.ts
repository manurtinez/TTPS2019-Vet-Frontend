import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable
  ({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  //chequea si el token expiro
  public isTokenExpired(): boolean {
    let jwthelper: JwtHelperService = new JwtHelperService();
    const token = localStorage.getItem('token');
    return jwthelper.isTokenExpired(token);
  }

  public isLoggedIn() {
    return localStorage.getItem('currentUser') ? true : false; 
  }

  login(username: string, password: string) {
    const user = new User(username, password);
    return this.http.post<any>('http://localhost:8080/HistoriaClinicaMascotas/autenticacion', user)
      .pipe(map(credentials => {
        if (credentials && credentials.token) {
          if ((credentials.rol == 'Veterinario' 
          //&& credentials.habilitado == true
          ) 
          || (credentials.rol == 'Dueno' || credentials.rol == "Admin")) {
            localStorage.setItem('currentUser', JSON.stringify(credentials));
            localStorage.setItem('token', credentials.token);
            this.currentUserSubject.next(credentials);
            return credentials;
          }
          else {
            alert('usted no se encuentra habilitado');
          }
        }
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/login')
  }
}
