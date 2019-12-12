import { Injectable } from '@angular/core';
import { Veterinario } from '../models/veterinario';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class VeterinarioService {
  constructor(private http: HttpClient) {}

  public agregarVeterinario(vet: Veterinario) {
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/create/veterinario/`, vet);
  }
}
