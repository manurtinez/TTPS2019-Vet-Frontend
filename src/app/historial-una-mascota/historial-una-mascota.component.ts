import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from '../models/mascota';
import { Evento } from '../models/evento';
import { MascotaService } from '../services/mascota-service';
import { EventoService } from '../services/evento-service';

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
  eventoService: EventoService;
  visibleEventos = false;
  visibleForm = false;
  constructor(router: Router, route: ActivatedRoute, mascotaService: MascotaService, eventoService: EventoService) {
    this.route = route;
    this.mascotaService = mascotaService;
    this.eventoService = eventoService;
   }

  ngOnInit() {
    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getHistorialUnaMascota();
    this.getEventosPosterioresDeUnaMascota();
    this.getMascota();
  }
  getHistorialUnaMascota() {
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
  }
  getMascota() {
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
  getEventosPosterioresDeUnaMascota() {
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
      this.evento.droga = '';
      this.evento.resultado = '';
      this.evento.fecha = null;
  }
  toggleVacunacion() {
    this.visibleForm = !this.visibleForm;
    this.evento.tipo_evento = 'Vacunacion';
    this.evento.fecha = null;
    this.evento.descripcion = '';
  }
  toggleEnfermedad() {
    this.visibleForm = !this.visibleForm;
    this.evento.tipo_evento = 'Enfermedad';
    this.evento.fecha = null;
    this.evento.descripcion = '';
  }
  toggleVisita() {
    this.visibleForm = !this.visibleForm;
    this.evento.tipo_evento = 'Visita';
    this.evento.motivo = '';
    this.evento.indicaciones = '';
    this.evento.peso = 0;
    this.evento.fecha = null;
    this.evento.descripcion = '';
  }
  toggleIntervencion() {
    this.visibleForm = !this.visibleForm;
    this.evento.tipo_evento = 'Intervencion';
    this.evento.fecha = null;
    this.evento.descripcion = '';
  }
  toggleHistorialReproductivo() {
    this.visibleForm = !this.visibleForm;
    this.evento.tipo_evento = 'HistorialReproductivo';
    this.evento.fecha = null;
    this.evento.nro_nacidos = 0;
  }
  alta() {
    this.evento.mascotaId = this.id;
    this.eventoService.altaEvento(this.evento).subscribe(
      data => {
        console.log(data);
      }
    );
    alert('Evento creado correctamente');
    this.evento = new Evento('', 0, 0, null, '', '', '', '', '', 0, 0, 0);
    this.getHistorialUnaMascota();
    this.getEventosPosterioresDeUnaMascota();
    this.visibleForm = false;
  }
}
