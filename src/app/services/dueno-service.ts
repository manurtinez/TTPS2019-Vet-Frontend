import { Injectable } from '@angular/core';
import { Mascota } from '../models/mascota';
import { HttpClient } from '@angular/common/http';
import { Dueno } from '../models/dueno';
import { Evento } from '../models/evento';

@Injectable({ providedIn: 'root' })
export class DuenoService {
  constructor(private http: HttpClient) {}

  getAllMascotas() {
    const id = JSON.parse(localStorage.getItem('currentUser')).id;
    return this.http.get<Mascota[]>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/mascota/${id}`);
  }

  getHistorial() {
    const id = JSON.parse(localStorage.getItem('currentUser')).id;
    const fecha = new Date();
    const dd = String(fecha.getDate()).padStart(2, '0');
    const mm = String(fecha.getMonth() + 1).padStart(2, '0');
    const yyyy = fecha.getFullYear();
    const hoy = yyyy + '-' + mm + '-' + dd;
    return this.http.get<Evento[]>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/${id}/mascotas/eventos-anteriores/${hoy}`);
  }

  agregarDueno(dueno: Dueno) {
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/create/dueno/`, dueno, {headers: {skip: 'true'}});
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
