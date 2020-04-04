import { Component, OnInit } from '@angular/core';
import { Mascota } from '../models/mascota';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MascotaService } from '../services/mascota-service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})
export class ModificarMascotaComponent implements OnInit {
  mascota: Mascota;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotaService: MascotaService
  ) {}

  ngOnInit() {
    this.mascotaService
      // tslint:disable-next-line: radix
      .getMascota(parseInt(this.route.snapshot.paramMap.get('id')))
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
