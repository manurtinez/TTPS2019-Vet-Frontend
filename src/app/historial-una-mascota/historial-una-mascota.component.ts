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
  router: Router;
  historial: Evento[];
  posteriores: Evento[];
  mascotaService: MascotaService;
  constructor(router: Router, route: ActivatedRoute, mascotaService: MascotaService) {
    this.router = router;
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


}
