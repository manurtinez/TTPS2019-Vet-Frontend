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
  habilitarVeterinario(v: Veterinario) {
    this.adminservice.habilitarVeterinario(v.id).subscribe(
      data => {
        alert('veterinario habilitado con exito');
        const index = this.veterinarios.indexOf(v);
        this.veterinarios.splice(index, 1);
      }
    );
  }
}
