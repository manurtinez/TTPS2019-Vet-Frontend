export class ConfigFicha {
  nombre: boolean;
  especie: boolean;
  raza: boolean;
  sexo: boolean;
  color: boolean;
  senas: boolean;
  nacimiento: boolean;
  fotos: boolean;
  veterinario: boolean;

  constructor() {
      this.nombre = false;
      this.color = false;
      this.especie = false;
      this.fotos = false;
      this.nacimiento = false;
      this.raza = false;
      this.senas = false;
      this.sexo = false;
      this.veterinario = false;
    }
}
