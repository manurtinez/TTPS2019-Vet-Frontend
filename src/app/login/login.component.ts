import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario-service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  providers: [UsuarioService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: string;
  pass: string;
  usuarios: any[] = UsuarioService.users;

  visibleDueno = false;
  visibleVet = false;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
    this.authenticationService.logout();
  }

  onSubmit() {
    this.authenticationService
      .login(this.username, this.pass)
      .pipe(
        first(),
        tap()
      )
      .subscribe(
        data => {
          this.router.navigateByUrl('/home');
      },
      error => {
          console.error(error);
      });
  }

  toggleDueno() {
    this.visibleDueno = !this.visibleDueno;
    if (this.visibleVet) {
      this.visibleVet = !this.visibleVet;
    }
  }

  toggleVet() {
    this.visibleVet = !this.visibleVet;
    if (this.visibleDueno) {
      this.visibleDueno = !this.visibleDueno;
    }
  }
}
