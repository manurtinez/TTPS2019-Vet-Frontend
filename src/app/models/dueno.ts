export class Dueno {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  telefono: number;

  constructor(nombre: string, apellido: string, email: string, telefono: number, password?: string) {
    this.apellido = apellido;
    this.email = email;
    this.nombre = nombre;
    if (password) {
      this.password = password;
    }
    this.telefono = telefono;
  }
}
