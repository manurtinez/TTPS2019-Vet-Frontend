import { ConfigFicha } from './configFicha';
import { Evento } from './evento';

export class Mascota {
  public id: number;
  public color: string;
  public especie: string;
  public nacimiento: Date;
  public nombre: string;
  public raza: string;
  public senas: string;
  public sexo: string;
  public configFicha: ConfigFicha;
  public fotos: Blob[];
  public historial: Evento[];

  constructor(color: string, especie: string, nacimiento: Date, nombre: string, raza: string,
              senas: string, sexo: string, configFicha: ConfigFicha) {
    this.color = color;
    this.especie = especie;
    this.nacimiento = nacimiento;
    this.nombre = nombre;
    this.raza = raza;
    this.senas = senas;
    this.sexo = sexo;
    this.fotos = null;
    this.configFicha = configFicha;
  }
}
