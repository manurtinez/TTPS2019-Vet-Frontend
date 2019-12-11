import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../models/mascota';
import { DuenoService } from '../services/dueno-service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public user: string;
  public visible: true;
  public mascotas: Mascota[];
  error = '';
  constructor(private route: ActivatedRoute, private duenoservice: DuenoService) { }

  ngOnInit() {
    this.user = this.route.snapshot.data.usuario;
    this.duenoservice.getAllMascotas().subscribe(
      data => {
        this.mascotas = data;
      },
      error => {
        this.error = 'no se pudieron recuperar las mascotas';
        console.error(error);
      }
    )
  }

}
