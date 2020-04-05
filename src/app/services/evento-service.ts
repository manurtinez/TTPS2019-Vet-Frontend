import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';

@Injectable
  ({ providedIn: 'root' })
export class EventoService {

  constructor(private http: HttpClient) {}
  altaEvento(e: Evento) {
    const fecha: Date = e.fecha;
    e.fecha = null;
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/mascota/${e.mascotaId}/nuevo-evento/${fecha}`, e);
  }
}
