import { Injectable } from '@angular/core';
import { Veterinario } from '../models/veterinario';
import { HttpClient } from '@angular/common/http';

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

  getAllVets() {
    return this.http.get<Veterinario[]>(`http://localhost:8080/HistoriaClinicaMascotas/todos-los-veterinarios`);
  }
}
