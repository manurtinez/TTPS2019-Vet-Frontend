import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../services/mascota-service';
import { VeterinarioService } from '../services/veterinario-service';
import { Mascota } from '../models/mascota';

@Component({
  selector: 'app-mascotas-vet-pendientes',
  templateUrl: './mascotas-vet-pendientes.component.html',
  styleUrls: ['./mascotas-vet-pendientes.component.css']
})
export class MascotasVetPendientesComponent implements OnInit {
  mascotas: Mascota[];

  constructor(
    private mascotaservice: MascotaService,
    private veterinarioservice: VeterinarioService
  ) {
    
   }

  ngOnInit() {
    this.veterinarioservice.getMascotasPendientes().subscribe(
      data => {
        this.mascotas = data;
      },
      error => {
        console.error(error);
      }
    )
  }

  aceptarMascota(m: Mascota) {
    this.veterinarioservice.aceptarMascota(m.id).subscribe(
      data => {
        alert('mascota aceptada con exito');
      },
      error => {
        alert('error al aceptar mascota');
        console.error(error);
      }
    )
    const index = this.mascotas.indexOf(m);
    this.mascotas.splice(index, 1);
  }

  rechazarMascota(m: Mascota) {
    this.veterinarioservice.rechazarMascota(m.id).subscribe(
      data => {
        alert('mascota rechazada con exito');
      },
      error => {
        alert('error al rechazar mascota');
        console.error(error);
      }
    )
    const index = this.mascotas.indexOf(m);
    this.mascotas.splice(index, 1);
  }

}
