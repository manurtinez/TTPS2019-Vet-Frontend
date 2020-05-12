import { Component, OnInit } from '@angular/core';
import { Mascota } from '../models/mascota';
import { DuenoService } from '../services/dueno-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigFicha } from '../models/configFicha';
import { MascotaService } from '../services/mascota-service';
import { Evento } from '../models/evento';
import { VeterinarioService } from '../services/veterinario-service';
import { Veterinario } from '../models/veterinario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public mostrarAgregar: true;
  mascotaid: number;
  public mostrarEvento: true;
  historial: Evento[];
  formMascota: FormGroup;
  formEditar: FormGroup;
  formVet: FormGroup;
  public mascotas: Mascota[];
  error = '';
  rol = JSON.parse(localStorage.getItem('currentUser')).rol;
  public veterinarios: Veterinario[];
  constructor(
    private duenoservice: DuenoService,
    private veterinarioservice: VeterinarioService,
    private formBuilder: FormBuilder,
    private mascotaService: MascotaService
  ) { }

  ngOnInit() {
    this.formMascota = this.formBuilder.group({
      nombre: [null, Validators.required],
      color: [null, Validators.required],
      especie: [null, Validators.required],
      nacimiento: [null, Validators.required],
      sexo: [null, Validators.required],
      senas: [null, Validators.required],
      raza: [null, Validators.required],
      vetID: [null],
      checkNombre: [null],
      checkColor: [null],
      checkEspecie: [null],
      checkNaci: [null],
      checkSexo: [null],
      checkRaza: [null],
      checkSenas: [null],
      checkVet: [null],
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
    this.formVet = this.formBuilder.group({
      vet: [null],
    })
    if (this.rol == 'Dueno') {
      this.duenoservice.getAllMascotas().subscribe(
        (data) => {
          this.mascotas = data;
        },
        (error) => {
          this.error = 'no se pudieron recuperar las mascotas';
          console.error(error);
        }
      );
    } else {
      this.veterinarioservice.getAllMascotas().subscribe(
        (data) => {
          this.mascotas = data;
        },
        (error) => {
          this.error = 'no se pudieron recuperar las mascotas';
          console.error(error);
        }
      );
    }
    this.veterinarioservice.getAllVets().subscribe(
      (data) => {
        this.veterinarios = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.duenoservice.getHistorial().subscribe(
      (data) => {
        this.historial = data;
      },
      (error) => {
        this.error = 'no se pudo recuperar el historial';
        console.error(error);
      }
    );
  }

  agregarMascota() {
    const config = new ConfigFicha(
      this.formMascota.controls.checkNombre.value,
      this.formMascota.controls.checkEspecie.value,
      this.formMascota.controls.checkRaza.value,
      this.formMascota.controls.checkSexo.value,
      this.formMascota.controls.checkColor.value,
      this.formMascota.controls.checkSenas.value,
      this.formMascota.controls.checkNaci.value,
      false,
      this.formMascota.controls.checkVet.value,
    );
    const mascota = new Mascota(
      this.formMascota.controls.color.value,
      this.formMascota.controls.especie.value,
      this.formMascota.controls.nacimiento.value,
      this.formMascota.controls.nombre.value,
      this.formMascota.controls.raza.value,
      this.formMascota.controls.senas.value,
      this.formMascota.controls.sexo.value,
      config
    );
    this.mascotaService.agregarMascota(mascota, this.formMascota.controls.vetID.value).subscribe(
      (data) => {
        window.alert('mascota agregada con exito!');
      },
      (error) => {
        alert('error al crear mascota');
        console.log(error);
      }
    );
    this.mascotas.push(mascota);
  }

  eliminarMascota(mascota: Mascota) {
    if (confirm(`Esta seguro de que quiere eliminar a ${mascota.nombre}?`)) {
      this.mascotaService.eliminarMascota(mascota.id).subscribe(
        (data) => {
          window.alert('mascota eliminada exitosamente!');
        },
        (error) => {
          alert('error al eliminar');
          console.log(error);
        }
      );
      const index = this.mascotas.indexOf(mascota);
      this.mascotas.splice(index, 1);
    }
  }

  agregarEvento() { }

  nombreMascota(mascotas, id) {
    for (let i = 0; i < mascotas.length; i++) {
      if (mascotas[i].id == id) {
        return mascotas[i].nombre;
      }
    }
    return '-';
  }

  editarVet() {
    
  }

  asignaridmodal(mascotaid: number) {
    this.mascotaid = mascotaid;
  }
}
