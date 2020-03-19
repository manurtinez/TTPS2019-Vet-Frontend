import { Component, OnInit } from '@angular/core';
import { Mascota } from '../models/mascota';
import { DuenoService } from '../services/dueno-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigFicha } from '../models/configFicha';
import { MascotaService } from '../services/mascota-service';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public mostrarAgregar: true;
  public mostrarEvento: true;
  historial: Evento[];
  formMascota: FormGroup;
  formEditar: FormGroup;
  private configFicha = new ConfigFicha();
  public mascotas: Mascota[];
  error = '';
  constructor(private duenoservice: DuenoService, private formBuilder: FormBuilder, private mascotaService: MascotaService) {
  }

  ngOnInit() {
    this.formMascota = this.formBuilder.group({
      nombre: [null, Validators.required],
      color: [null, Validators.required],
      especie: [null, Validators.required],
      nacimiento: [null, Validators.required],
      sexo: [null, Validators.required],
      senas: [null, Validators.required],
      raza: [null, Validators.required],
    });
    this.formEditar = this.formBuilder.group({
      nombre: [null, Validators.required],
      color: [null, Validators.required],
      especie: [null, Validators.required],
      nacimiento: [null, Validators.required],
      sexo: [null, Validators.required],
      senas: [null, Validators.required],
      raza: [null, Validators.required],
    });
    this.duenoservice.getAllMascotas().subscribe(
      data => {
        this.mascotas = data;
        console.log(this.mascotas);
      },
      error => {
        this.error = 'no se pudieron recuperar las mascotas';
        console.error(error);
      }
    );
    this.duenoservice.getHistorial().subscribe(
      data => {
        this.historial = data;
        console.log(this.historial);
      },
      error => {
        this.error = 'no se pudo recuperar el historial';
        console.error(error);
      }
    );
  }

  agregarMascota() {
    console.log('hola');
    const mascota = new Mascota(
      this.formMascota.controls.color.value,
      this.formMascota.controls.especie.value,
      this.formMascota.controls.nacimiento.value,
      this.formMascota.controls.nombre.value,
      this.formMascota.controls.raza.value,
      this.formMascota.controls.senas.value,
      this.formMascota.controls.sexo.value,
      this.configFicha
    );
    this.mascotaService.agregarMascota(mascota).subscribe(
      data => {
        console.log(data);
        window.alert('mascota agregada con exito!');
      },
      error => {
        alert('error al crear mascota');
        console.log(error);
      }
    );
    this.mascotas.push(mascota);
  }

  eliminarMascota(mascota: Mascota) {
    if (confirm(`Esta seguro de que quiere eliminar a ${mascota.nombre}?`)) {
      this.mascotaService.eliminarMascota(mascota.id).subscribe(
        data => {
          console.log(data);
          window.alert('mascota eliminada exitosamente!');
        },
        error => {
          alert('error al eliminar');
          console.log(error);
        }
      );
      const index = this.mascotas.indexOf(mascota);
      this.mascotas.splice(index, 1);
    }
  }

  agregarEvento() {

  }

  nombreMascota(mascotas, id) {
    for (let i = 0; i < mascotas.length; i++) {
      if (mascotas[i].id == id) {
        return mascotas[i].nombre;
      }
    }
    return '-';
  }

}
