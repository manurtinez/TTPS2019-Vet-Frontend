import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Mascota } from '../models/mascota';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../services/mascota-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})
export class ModificarMascotaComponent implements OnInit, AfterContentInit {
  public mascota: Mascota;
  formMascota: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.mascotaService
      // tslint:disable-next-line: radix
      .getMascota(parseInt(this.route.snapshot.paramMap.get('id')))
      .subscribe(
        data => {
          this.mascota = data;
          let fecha = new Date(this.mascota.nacimiento);
          this.formMascota = this.formBuilder.group({
            nombre: [this.mascota.nombre, Validators.required],
            color: [this.mascota.color, Validators.required],
            especie: [this.mascota.especie, Validators.required],
            nacimiento: [fecha, Validators.required],
            sexo: [this.mascota.sexo, Validators.required],
            senas: [this.mascota.senas, Validators.required],
            raza: [this.mascota.raza, Validators.required],
            checkNombre: [null],
            checkColor: [null],
            checkEspecie: [null],
            checkNaci: [null],
            checkSexo: [null],
            checkRaza: [null],
            checkSenas: [null],
          });
        },
        error => {
          console.log(error);
        }
      );
    console.log(this.mascota);
    // this.formMascota = this.formBuilder.group({
    //   nombre: ['hola', Validators.required],
    //   color: [null, Validators.required],
    //   especie: [null, Validators.required],
    //   nacimiento: [null, Validators.required],
    //   sexo: [null, Validators.required],
    //   senas: [null, Validators.required],
    //   raza: [null, Validators.required],
    //   checkNombre: [null],
    //   checkColor: [null],
    //   checkEspecie: [null],
    //   checkNaci: [null],
    //   checkSexo: [null],
    //   checkRaza: [null],
    //   checkSenas: [null],
    // });
  }

  ngAfterContentInit() {

  }
}
