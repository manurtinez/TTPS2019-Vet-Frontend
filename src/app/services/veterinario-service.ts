import { Injectable } from '@angular/core';
import { Veterinario } from '../models/veterinario';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../models/mascota';
import { Evento } from '../models/evento';

@Injectable({ providedIn: 'root' })
export class VeterinarioService {
  constructor(private http: HttpClient) {}

  public agregarVeterinario(vet: Veterinario) {
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/create/veterinario/`, vet, {headers: {skip: 'true'}});
  }
  validar(vet: Veterinario): boolean {
    if ((vet.nombre === '') || (vet.apellido === '') || (vet.email === '') ||
        (vet.password === '') || (vet.telefono === null) ||  (vet.nroMatricula === null) ) {
      return false;
    }
    return true;
  }

  getMascotasPendientes() {
    const id = JSON.parse(localStorage.getItem('currentUser')).id;
    return this.http.get<Mascota[]>(`http://localhost:8080/HistoriaClinicaMascotas/veterinario/${id}/mascotas-pendientes`);
  }

  getAllVets() {
    return this.http.get<Veterinario[]>(`http://localhost:8080/HistoriaClinicaMascotas/todos-los-veterinarios`);
  }

  getAllMascotas() {
    const id = JSON.parse(localStorage.getItem('currentUser')).id;
    return this.http.get<Mascota[]>(`http://localhost:8080/HistoriaClinicaMascotas/veterinario/${id}/mascotas`);
  }

  getHistorial() {
      const id = JSON.parse(localStorage.getItem('currentUser')).id;
      const fecha = new Date();
      const dd = String(fecha.getDate()).padStart(2, '0');
      const mm = String(fecha.getMonth() + 1).padStart(2, '0');
      const yyyy = fecha.getFullYear();
      const hoy = yyyy + '-' + mm + '-' + dd;
      return this.http.get<Evento[]>(`http://localhost:8080/HistoriaClinicaMascotas/veterinario/${id}/mascotas/eventos-anteriores/${hoy}`);
  }

  aceptarMascota(id: number) {
    return this.http.get<any>(`http://localhost:8080/HistoriaClinicaMascotas/veterinario/mascotas/${id}/aceptar-mascota`);
  }
  
  rechazarMascota(id: number) {
    return this.http.get<any>(`http://localhost:8080/HistoriaClinicaMascotas/veterinario/mascotas/${id}/rechazar-mascota`);
  }
}
