import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../models/veterinario';
import { VeterinarioService } from '../services/veterinario-service';

@Component({
  selector: 'app-alta-veterinario',
  templateUrl: './alta-veterinario.component.html',
  styleUrls: ['./alta-veterinario.component.css']
})
export class AltaVeterinarioComponent implements OnInit {
  vet: Veterinario = new Veterinario ('', '', '', '', 0, '', '', 0);
  constructor(private veterinarioService: VeterinarioService) { }

  ngOnInit() {
  }
  altaVeterinario() {
    console.log(this.vet);
    this.veterinarioService.agregarVeterinario(this.vet).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
