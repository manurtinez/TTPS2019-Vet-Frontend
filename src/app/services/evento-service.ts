import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';

@Injectable
  ({ providedIn: 'root' })
export class EventoService {

  constructor(private http: HttpClient) {}
  altaEvento(e: Evento) {
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/dueno/mascota/${e.mascotaId}/nuevo-evento/`, e);
  }
}
