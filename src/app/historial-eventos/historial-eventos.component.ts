import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/evento';
import { DuenoService } from '../services/dueno-service';
import { Mascota } from '../models/mascota';
import { VeterinarioService } from '../services/veterinario-service';
import { EventoService } from '../services/evento-service';

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

  constructor(private duenoservice: DuenoService, private veterniarioservice: VeterinarioService, private eventoService: EventoService) {
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

  eliminarEvento(e: Evento) {
    if (confirm('realmente quiere eliminar este evento?')) {
      this.eventoService.eliminarEvento(e).subscribe(
        success => {
          alert('el evento fue eliminado exitosamente!');
          const index = this.historial.indexOf(e);
          this.historial.splice(index, 1);
        },
        error => {
          alert('hubo algun problema eliminando el evento');
          console.error(error);
        }
      )
    }
  }

}
