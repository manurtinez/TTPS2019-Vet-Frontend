export class Veterinario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  telefono: number;
  nomClinica: string;
  dirClinica: string;
  nroMatricula: number;
  habilitado: number;

  constructor(id: number, nombre: string, apellido: string, email: string, password: string,
              telefono: number, nomClinica: string, dirClinica: string, nroMatricula: number, habilitado: number) {
    this.id = id;
    this.apellido = apellido;
    this.email = email;
    this.nombre = nombre;
    this.password = password;
    this.telefono = telefono;
    this.nroMatricula = nroMatricula;
    this.dirClinica = dirClinica;
    this.nomClinica = nomClinica;
    this.habilitado = habilitado;
  }

}
