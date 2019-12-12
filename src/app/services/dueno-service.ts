import { Injectable } from '@angular/core';
import { Mascota } from '../models/mascota';
import { HttpClient } from '@angular/common/http';
import { Dueno } from '../models/dueno';

@Injectable({ providedIn: 'root' })
export class DuenoService {
  constructor(private http: HttpClient){}

  getAllMascotas(){
    const id = JSON.parse(localStorage.getItem('currentUser')).id;
    return this.http.get<Mascota[]>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/mascota/${id}`);
  }

  public agregarDueno(dueno: Dueno) {
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/create/dueno/`, dueno);
  }
}
