export class Veterinario {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  telefono: number;
  nomClinica: string;
  dirClinica: string;
  nroMatricula: number;

  constructor(nombre: string, apellido: string, email: string, password: string,
              telefono: number, nomClinica: string, dirClinica: string, nroMatricula: number) {
    this.apellido = apellido;
    this.email = email;
    this.nombre = nombre;
    this.password = password;
    this.telefono = telefono;
    this.nroMatricula = nroMatricula;
    this.dirClinica = dirClinica;
    this.nomClinica = nomClinica;
  }

}
