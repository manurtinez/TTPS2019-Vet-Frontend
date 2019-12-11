import { Injectable } from '@angular/core';
import { Mascota } from '../models/mascota';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DuenoService {
  constructor(private http: HttpClient){}

  getAllMascotas(){
    const id = JSON.parse(localStorage.getItem('currentUser')).id;
    return this.http.get<Mascota[]>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/mascota/${id}`);
  }
}
