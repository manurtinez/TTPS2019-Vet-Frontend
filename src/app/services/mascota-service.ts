import { Mascota } from '../models/mascota';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable
  ({ providedIn: 'root' })
export class MascotaService {

  constructor(private http: HttpClient) {}

  public agregarMascota(mascota: Mascota) {
    return this.http.post<any>('http://localhost:8080/HistoriaClinicaMascotas/mascota', mascota);
  }
}
