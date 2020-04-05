import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin-service';
import { Veterinario } from '../models/veterinario';

@Component({
  selector: 'app-habilitar-veterinarios',
  templateUrl: './habilitar-veterinarios.component.html',
  styleUrls: ['./habilitar-veterinarios.component.css']
})
export class HabilitarVeterinariosComponent implements OnInit {
  veterinarios: Veterinario[];
  constructor(private adminservice: AdminService) { }

  ngOnInit() {
    this.adminservice.veterinariosInhabilitados().subscribe(
      data => {
        this.veterinarios = data;
      }
    );
  }
  habilitarVeterinario(id: number) {
    this.adminservice.habilitarVeterinario(id).subscribe(
      data => {
        alert('veterinario habilitado con exito');
        location.reload();
      }
    );
  }
}
