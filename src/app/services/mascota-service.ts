import { Mascota } from '../models/mascota';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';

@Injectable
  ({ providedIn: 'root' })
export class MascotaService {

  constructor(private http: HttpClient) {}

  public agregarMascota(mascota: Mascota, vetID: number) {
    const iddue = JSON.parse(localStorage.getItem('currentUser')).id;
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/${iddue}/nuevaMascota/${vetID}`, mascota);
  }

  public editarMascota(mascota: Mascota) {
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/editarMascota/${mascota.id}`, mascota);
  }

  public editarVet(mascotaID: number, vetId: number) {
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/mascita/${mascotaID}/asignar-veterinario/`, vetId);
  }

  public eliminarMascota(idMascota: number) {
    const id = JSON.parse(localStorage.getItem('currentUser')).id;
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/${id}/borrarMascota`, idMascota);
  }

  public ultimasMascotas() {
    return this.http.get<Mascota[]>('http://localhost:8080/HistoriaClinicaMascotas/ultimasMascotas');
  }

  public getMascota(id: number) {
    return this.http.get<Mascota>(`http://localhost:8080/HistoriaClinicaMascotas/mascotaSola/${id}`);
  }

  public getHistorialUnaMascota(id: number) {
    const fecha = new Date();
    const dd = String(fecha.getDate()).padStart(2, '0');
    const mm = String(fecha.getMonth() + 1).padStart(2, '0');
    const yyyy = fecha.getFullYear();
    const hoy = yyyy + '-' + mm + '-' + dd;
    return this.http.get<Evento[]>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/mascotas/${id}/eventos-anteriores/${hoy}`);
  }
  public getEventosPosterioresDeUnaMascota(id: number) {
    const fecha = new Date();
    const dd = String(fecha.getDate()).padStart(2, '0');
    const mm = String(fecha.getMonth() + 1).padStart(2, '0');
    const yyyy = fecha.getFullYear();
    const hoy = yyyy + '-' + mm + '-' + dd;
    return this.http.get<Evento[]>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/mascotas/${id}/eventos-posteriores/${hoy}`);
  }
}
