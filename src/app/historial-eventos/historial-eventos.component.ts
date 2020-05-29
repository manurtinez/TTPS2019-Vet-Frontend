import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/evento';
import { DuenoService } from '../services/dueno-service';
import { Mascota } from '../models/mascota';
import { VeterinarioService } from '../services/veterinario-service';

@Component({
  selector: 'app-historial-eventos',
  templateUrl: './historial-eventos.component.html',
  styleUrls: ['./historial-eventos.component.css']
})
export class HistorialEventosComponent implements OnInit {
  historial: Evento[];
  error: string;
  mascotas: Mascota[];
  rol = JSON.parse(localStorage.getItem('currentUser')).rol;

  constructor(private duenoservice: DuenoService, private veterniarioservice: VeterinarioService) {
    this.error = '';
   }

  ngOnInit() {
    if (this.rol == 'Dueno') {
    this.duenoservice.getAllMascotas().subscribe(
      data => {
        this.mascotas = data;
      },
      error => {
        this.error = 'no se pudieron recuperar las mascotas';
        console.error(error);
      }
    );
    this.duenoservice.getHistorial().subscribe(
      data => {
        this.historial = data;
      },
      error => {
        this.error = 'no se pudo recuperar el historial';
        console.error(error);
      }
    );
    } else {
      this.veterniarioservice.getAllMascotas().subscribe(
        data => {
          this.mascotas = data;
        },
        error => {
          this.error = 'no se pudieron recuperar las mascotas';
          console.error(error);
        }
      );
      this.veterniarioservice.getHistorial().subscribe(
        data => {
          this.historial = data;
        },
        error => {
          this.error = 'no se pudo recuperar el historial';
          console.error(error);
        }
      );
    }
  }
  nombreMascota(mascotas, id) {
    for (let i = 0; i < mascotas.length; i++) {
      if (mascotas[i].id == id) {
        return mascotas[i].nombre;
      }
    }
    return '-';
  }

}
