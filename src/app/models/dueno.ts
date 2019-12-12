export class Dueno {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  telefono: number;

  constructor(nombre: string, apellido: string, email: string, password: string, telefono: number){
    this.apellido = apellido;
    this.email = email;
    this.nombre = nombre;
    this.password = password;
    this.telefono = telefono;
  }
}
