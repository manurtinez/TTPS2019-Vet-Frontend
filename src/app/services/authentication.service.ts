import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  login(username: string, password: string) {
    const user = new User(username, password);
    return this.http.post<any>('http://localhost:8080/HistoriaClinicaMascotas/autenticacion', user)
      .pipe(map(credentials => {
        if (credentials && credentials.token) {
          console.log(credentials)
          if ((credentials.rol == 'Veterinario' 
          //&& credentials.habilitado == true
          ) 
          || (credentials.rol == 'Dueno' || credentials.rol == "Admin")) {
            localStorage.setItem('currentUser', JSON.stringify(credentials));
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
