import { ConfigFicha } from './configFicha';
import { Evento } from './evento';
import { Veterinario } from './veterinario';
import { Dueno } from './dueno';

export class Mascota {
  public id: number;
  public veterinario: Veterinario;
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
  public dueno: Dueno

  constructor(color: string, especie: string, nacimiento: Date, nombre: string, raza: string,
              senas: string, sexo: string, configFicha: ConfigFicha, dueno: Dueno) {
    this.color = color;
    this.especie = especie;
    this.nacimiento = nacimiento;
    this.nombre = nombre;
    this.raza = raza;
    this.senas = senas;
    this.sexo = sexo;
    this.fotos = null;
    this.configFicha = configFicha;
    this.dueno = dueno;
  }
}
