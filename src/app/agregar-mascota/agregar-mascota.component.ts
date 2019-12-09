import { Component, OnInit } from '@angular/core';
import { Mascota } from '../models/mascota';
import { MascotaService } from '../services/mascota-service';

@Component({
  selector: 'app-agregar-mascota',
  providers: [MascotaService],
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent implements OnInit {
  mascota: Mascota = new Mascota('', '', null, '', '', '', '');
  constructor(private mascotaService: MascotaService) { }

  ngOnInit() {
  }

  agregarMascota() {
    this.mascotaService.agregarMascota(this.mascota).subscribe(
      data => {
        console.log('mascotita');
      },
      error => {
        console.log('no mascotita');
      }
    );
  }

}
