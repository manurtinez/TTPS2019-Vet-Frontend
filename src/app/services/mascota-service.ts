import { Mascota } from '../models/mascota';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable
  ({ providedIn: 'root' })
export class MascotaService {

  constructor(private http: HttpClient) {}

  public agregarMascota(mascota: Mascota, vetID: number) {
    const iddue = JSON.parse(localStorage.getItem('currentUser')).id;
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/${iddue}/nuevaMascota/${parseInt(vetID)}`, mascota);
  }

  public editarMascota(mascota: Mascota) {
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/editarMascota/${mascota.id}`, mascota);
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
}
