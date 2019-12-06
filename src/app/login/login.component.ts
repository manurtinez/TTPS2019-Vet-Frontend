import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario-service';
import { Usuario } from '../modelos/usuario';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-login',
  providers: [UsuarioService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  pass: string;
  usuarios = UsuarioService.users;

  constructor() {}

  ngOnInit() {}

  login() {
    console.log('hola');
    if (this.usuarios.filter(u => {
      return (u.username === this.username);
    })) {
      window.alert('correcto');
     } else {
       window.alert('incorrecto');
     }
    // if (UsuarioService.users.indexOf(this.usuario) === -1) {
    //   window.alert('incorrecto');
    // } else {
    //   window.alert('correcto');
    // }
  }
}
