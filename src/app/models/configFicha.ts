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

  constructor(nombre: boolean,
    especie: boolean,
    raza: boolean,
    sexo: boolean,
    color: boolean,
    senas: boolean,
    nacimiento: boolean,
    fotos: boolean,
    veterinario: boolean) {
      this.nombre = nombre;
      this.color = color;
      this.especie = especie;
      this.fotos = fotos;
      this.nacimiento = nacimiento;
      this.raza = raza;
      this.senas = senas;
      this.sexo = sexo;
      this.veterinario = veterinario;
    }
}
