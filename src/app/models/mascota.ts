export class Mascota {
  public color: string;
  public especie: string;
  public nacimiento: Date;
  public nombre: string;
  public raza: string;
  public senas: string;
  public sexo: string;

  constructor(color: string, especie: string, nacimiento: Date, nombre: string, raza: string, senas: string, sexo: string) {
    this.color = color;
    this.especie = especie;
    this.nacimiento = nacimiento;
    this.nombre = nombre;
    this.raza = raza;
    this.senas = senas;
    this.sexo = sexo;
  }
}
