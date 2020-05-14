import { Component, OnInit } from '@angular/core';
import { Mascota } from '../models/mascota';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from '../services/mascota-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigFicha } from '../models/configFicha';
import { VeterinarioService } from '../services/veterinario-service';
import { Veterinario } from '../models/veterinario';

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})
export class ModificarMascotaComponent implements OnInit {
  public mascota: Mascota;
  formMascota: FormGroup;
  naci: Date;
  todosVets: Veterinario[];

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private veterinarioService: VeterinarioService
  ) { }

  ngOnInit() {
    this.veterinarioService.getAllVets().subscribe(
      data => {
        this.todosVets = data;
        console.log(this.todosVets)
      },
      error => {
        console.log(error);
      }
    );
    this.mascotaService
      // tslint:disable-next-line: radix
      .getMascota(parseInt(this.route.snapshot.paramMap.get('id')))
      .subscribe(
        data => {
          this.mascota = data;
          this.naci = new Date(this.mascota.nacimiento);
          this.formMascota = this.formBuilder.group({
            nombre: [this.mascota.nombre, Validators.required],
            color: [this.mascota.color, Validators.required],
            especie: [this.mascota.especie, Validators.required],
            nacimiento: [this.naci, Validators.required],
            vetID: [this.mascota.veterinario, Validators.required],
            sexo: [this.mascota.sexo, Validators.required],
            senas: [this.mascota.senas, Validators.required],
            raza: [this.mascota.raza, Validators.required],
            checkNombre: [this.mascota.configFicha.nombre],
            checkColor: [this.mascota.configFicha.color],
            checkEspecie: [this.mascota.configFicha.especie],
            checkNaci: [this.mascota.configFicha.nacimiento],
            checkSexo: [this.mascota.configFicha.sexo],
            checkRaza: [this.mascota.configFicha.raza],
            checkSenas: [this.mascota.configFicha.senas],
            checkVet: [this.mascota.configFicha.veterinario],
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  editarMascota() {
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
    this.mascota.color = this.formMascota.controls.color.value,
    this.mascota.especie = this.formMascota.controls.especie.value,
    this.mascota.nacimiento = this.formMascota.controls.nacimiento.value,
    this.mascota.nombre = this.formMascota.controls.nombre.value,
    this.mascota.raza = this.formMascota.controls.raza.value,
    this.mascota.senas = this.formMascota.controls.senas.value,
    this.mascota.sexo = this.formMascota.controls.sexo.value;
    this.mascota.configFicha = config;
    this.mascotaService.editarMascota(this.mascota).subscribe(
      x => {
        alert('mascota editada con exito!');
        this.router.navigate(['/perfil']);
      },
      error => {
        console.log(error);
      }
    );
    this.mascotaService.asignarVet(this.mascota, this.formMascota.controls.vetID.value).subscribe();
  }
}
