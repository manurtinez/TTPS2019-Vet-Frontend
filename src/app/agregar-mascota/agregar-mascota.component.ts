import { Component, OnInit } from '@angular/core';
import { Mascota } from '../models/mascota';
import { MascotaService } from '../services/mascota-service';
import { ConfigFicha } from '../models/configFicha';

@Component({
  selector: 'app-agregar-mascota',
  providers: [MascotaService],
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent implements OnInit {
  private configFicha = new ConfigFicha();
  mascota: Mascota = new Mascota('', '', null, '', '', '', '', this.configFicha);
  constructor(private mascotaService: MascotaService) { }

  ngOnInit() {
  }

  agregarMascota() {
    this.mascotaService.agregarMascota(this.mascota).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
