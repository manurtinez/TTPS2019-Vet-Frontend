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

  agregarDueno(dueno: Dueno) {
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/create/dueno/`, dueno);
  }
  editarDueno(dueno: Dueno) {
    const id = JSON.parse(localStorage.getItem('currentUser')).id;
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/editDueno/${id}`, dueno);
  }

  validar(dueno: Dueno): boolean {
    if ((dueno.nombre === '') || (dueno.apellido === '') || (dueno.email === '') || (dueno.password === '')) {
      return false;
    }
    return true;
  }
}
