import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../models/veterinario';
import { VeterinarioService } from '../services/veterinario-service';

@Component({
  selector: 'app-alta-veterinario',
  templateUrl: './alta-veterinario.component.html',
  styleUrls: ['./alta-veterinario.component.css']
})
export class AltaVeterinarioComponent implements OnInit {
  vet: Veterinario = new Veterinario ('', '', '', '', null, '', '', null);
  constructor(private veterinarioService: VeterinarioService) { }

  ngOnInit() { }

  altaVeterinario() {
    console.log(this.vet);
    if (this.veterinarioService.validar(this.vet)) {
      if (this.vet.dirClinica === '') {
        this.vet.dirClinica = null;
      }
      if (this.vet.nomClinica === '') {
        this.vet.nomClinica = null;
      }
      this.veterinarioService.agregarVeterinario(this.vet).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      alert('espacios en blanco');
    }
  }
}
