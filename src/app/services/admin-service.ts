import { Injectable } from '@angular/core';
import { Veterinario } from '../models/veterinario';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient) {}

  public veterinariosInhabilitados() {
    return this.http.get<Veterinario[]>('http://localhost:8080/HistoriaClinicaMascotas/admin/veterinarios');
  }
  public habilitarVeterinario(id: number) {
    return this.http.post<any>(`http://localhost:8080/HistoriaClinicaMascotas/admin/habilitarVeterinario/`, id);
  }
}
