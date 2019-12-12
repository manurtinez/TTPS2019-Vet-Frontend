import { Component, OnInit } from '@angular/core';
import { Mascota } from '../models/mascota';
import { MascotaService } from '../services/mascota-service';
import { ConfigFicha } from '../models/configFicha';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-mascota',
  providers: [MascotaService],
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent implements OnInit {
  private configFicha = new ConfigFicha();
  // mascota: Mascota = new Mascota('', '', null, '', '', '', '', this.configFicha);
  constructor(private mascotaService: MascotaService, private formBuilder: FormBuilder) { }
  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      nombre: [null, Validators.required],
      color: [null, Validators.required],
      especie: [null, Validators.required],
      nacimiento: [null, Validators.required],
      sexo: [null, Validators.required],
      senas: [null, Validators.required],
      raza: [null, Validators.required],
    });
  }

  agregarMascota() {
    console.log('hola');
    const mascota = new Mascota(
      this.form.controls.color.value,
      this.form.controls.especie.value,
      this.form.controls.nacimiento.value,
      this.form.controls.nombre.value,
      this.form.controls.raza.value,
      this.form.controls.senas.value,
      this.form.controls.sexo.value,
      this.configFicha
    );
    this.mascotaService.agregarMascota(mascota).subscribe(
      data => {
        console.log(data);
        window.alert('mascota agregada con exito!');
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

}
