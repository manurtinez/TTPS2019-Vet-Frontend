import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from '../models/mascota';
import { Evento } from '../models/evento';
import { MascotaService } from '../services/mascota-service';

@Component({
  selector: 'app-historial-una-mascota',
  templateUrl: './historial-una-mascota.component.html',
  styleUrls: ['./historial-una-mascota.component.css']
})
export class HistorialUnaMascotaComponent implements OnInit {
  route: ActivatedRoute;
  id: number;
  mascota: Mascota;
  historial: Evento[];
  posteriores: Evento[];
  evento: Evento = new Evento('', 0, 0, null, '', '', '', '', '', 0, 0, 0);
  mascotaService: MascotaService;
  visibleEventos = false;
  visibleForm = false;
  constructor(router: Router, route: ActivatedRoute, mascotaService: MascotaService) {
    this.route = route;
    this.mascotaService = mascotaService;
   }

  ngOnInit() {
    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.mascotaService
    .getHistorialUnaMascota(this.id)
    .subscribe(
      data => {
        this.historial = data;
      },
      error => {
        console.log(error);
      }
    );
    this.mascotaService
    .getEventosPosterioresDeUnaMascota(this.id)
    .subscribe(
      data => {
        this.posteriores = data;
      },
      error => {
        console.log(error);
      }
    );
    this.mascotaService
      .getMascota(this.id)
      .subscribe(
        data => {
          this.mascota = data;
        },
        error => {
          console.log(error);
        }
      );
  }
  isVisita() {
    return  (this.evento.tipo_evento === 'Visita');
  }
  isVacunacionEnfermedadIntervencionVisita() {
    return ((this.evento.tipo_evento === 'Vacunacion')
    || (this.evento.tipo_evento === 'Enfermedad')
    || (this.evento.tipo_evento === 'Intervencion')
    || (this.evento.tipo_evento === 'Visita'));
  }
  isHistorialRepoductivo() {
    return (this.evento.tipo_evento === 'HistorialReproductivo');
  }
  isDesparasitacion() {
    return (this.evento.tipo_evento === 'Desparasitacion');
  }
  toggleEvento() {
    this.visibleEventos = !this.visibleEventos;
  }
  toggleDesparasitacion() {
      this.visibleForm = !this.visibleForm;
      this.evento.tipo_evento = 'Desparasitacion';
  }
  toggleVacunacion() {
    this.visibleForm = !this.visibleForm;
    this.evento.tipo_evento = 'Vacunacion';
  }
  toggleEnfermedad() {
    this.visibleForm = !this.visibleForm;
    this.evento.tipo_evento = 'Enfermedad';
  }
  toggleVisita() {
    this.visibleForm = !this.visibleForm;
    this.evento.tipo_evento = 'Visita';
  }
  toggleIntervencion() {
    this.visibleForm = !this.visibleForm;
    this.evento.tipo_evento = 'Intervencion';
  }
  toggleHistorialReproductivo() {
    this.visibleForm = !this.visibleForm;
    this.evento.tipo_evento = 'HistorialReproductivo';
  }
  alta() {
    this.evento.mascotaId = this.id;
    console.log(this.evento.fecha);
    alert('Evento creado correctamente');
    this.visibleForm = false;
  }
}
