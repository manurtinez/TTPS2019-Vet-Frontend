import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../models/mascota';
import { DuenoService } from '../services/dueno-service';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public visible: true;
  public mascotas: Mascota[];
  error = '';
  constructor(private duenoservice: DuenoService) {
   }

  ngOnInit() {
    this.duenoservice.getAllMascotas().subscribe(
      data => {
        this.mascotas = data;
      },
      error => {
        this.error = 'no se pudieron recuperar las mascotas';
        console.error(error);
      }
    );
  }

}
