import { Component, OnInit } from '@angular/core';
import { Dueno } from '../models/dueno';
import { DuenoService } from '../services/dueno-service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-dueno',
  templateUrl: './editar-dueno.component.html',
  styleUrls: ['./editar-dueno.component.css']
})
export class EditarDuenoComponent implements OnInit {
  form: FormGroup;
  nombre: string;
  apellido: string;
  email: string;
  telefono: number;

  constructor(private duenoservice: DuenoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    const act = JSON.parse(localStorage.getItem('currentUser'));
    this.nombre = act.nombre;
    this.apellido = act.apellido;
    this.telefono = act.telefono;
    this.email = act.email;

    this.form = this.formBuilder.group({
      nombre: [this.nombre, Validators.required],
      apellido: [this.apellido, Validators.required],
      telefono: [this.telefono, Validators.required],
      email: [this.email, Validators.required],
    });
  }

  editarDueno() {
    const d = new Dueno(
      this.form.controls.nombre.value,
      this.form.controls.apellido.value,
      this.form.controls.email.value,
      this.form.controls.telefono.value,
    );
    this.duenoservice.editarDueno(d).subscribe(
      data => {
        alert('dueno editado con exito');
        const json = JSON.parse(localStorage.getItem('currentUser'));
        json.usuario = this.form.controls.nombre.value;
        json.nombre = this.form.controls.nombre.value;
        json.apellido = this.form.controls.apellido.value;
        json.telefono = this.form.controls.telefono.value;
        json.email = this.form.controls.email.value;
        localStorage.setItem('currentUser', JSON.stringify(json));
        location.reload();
      },
      error => {
        alert('error al editar');
        console.log(error);
      }
    );
  }

}
