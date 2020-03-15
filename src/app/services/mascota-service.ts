import { Mascota } from '../models/mascota';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable
  ({ providedIn: 'root' })
export class MascotaService {

  constructor(private http: HttpClient) {}

  public agregarMascota(mascota: Mascota) {
    const id = JSON.parse(localStorage.getItem('currentUser')).id;
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/${id}/nuevaMascota`, mascota);
  }

  public eliminarMascota(idMascota: number) {
    const id = JSON.parse(localStorage.getItem('currentUser')).id;
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/${id}/borrarMascota`, idMascota);
  }
}
