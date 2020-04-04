import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/evento';
import { DuenoService } from '../services/dueno-service';
import { Mascota } from '../models/mascota';

@Component({
  selector: 'app-historial-eventos',
  templateUrl: './historial-eventos.component.html',
  styleUrls: ['./historial-eventos.component.css']
})
export class HistorialEventosComponent implements OnInit {
  historial: Evento[];
  duenoservice: DuenoService;
  error: string;
  mascotas: Mascota[];

  constructor(duenoservice: DuenoService) {
    this.duenoservice = duenoservice;
    this.error = '';
   }

  ngOnInit() {
    this.duenoservice.getAllMascotas().subscribe(
      data => {
        this.mascotas = data;
        console.log('mascotas:', this.mascotas);
      },
      error => {
        this.error = 'no se pudieron recuperar las mascotas';
        console.error(error);
      }
    );
    this.duenoservice.getHistorial().subscribe(
      data => {
        this.historial = data;
        console.log(this.historial);
      },
      error => {
        this.error = 'no se pudo recuperar el historial';
        console.error(error);
      }
    );

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
