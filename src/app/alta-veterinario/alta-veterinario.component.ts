import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../models/veterinario';
import { VeterinarioService } from '../services/veterinario-service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-veterinario',
  templateUrl: './alta-veterinario.component.html',
  styleUrls: ['./alta-veterinario.component.css']
})
export class AltaVeterinarioComponent implements OnInit {
  vet: Veterinario = new Veterinario (0, '', '', '', '', null, '', '', null, 0);
  constructor(private veterinarioService: VeterinarioService, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() { }

  altaVeterinario() {
    if (this.veterinarioService.validar(this.vet)) {
      if (this.vet.dirClinica === '') {
        this.vet.dirClinica = null;
      }
      if (this.vet.nomClinica === '') {
        this.vet.nomClinica = null;
      }
      this.veterinarioService.agregarVeterinario(this.vet).subscribe(
        data => {
          alert('veterinario creado con exito');
          this.authenticationService.login(this.vet.email, this.vet.password).subscribe(
            success => {
              this.router.navigateByUrl('/home')
            },
            error => {
              alert('hubo algun error al iniciar sesion')
              console.log(error)
            }
          )
        },
        error => {
          alert('error al crear veterinario');
          console.log(error);
        }
      );
    } else {
      alert('espacios en blanco');
    }
  }
}
