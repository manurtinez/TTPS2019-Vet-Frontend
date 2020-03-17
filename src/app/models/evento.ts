export class Evento {
  id: number;
  fecha: Date;
  droga: string;
  resultado: string;
  descripcion: string;
  indicaciones: string;
  motivo: string;
  peso: number;
  nroNacidos: number;

  constructor(fecha: Date,
              droga: string,
              resultado: string,
              descripcion: string,
              indicaciones: string,
              motivo: string,
              peso: number,
              nroNacidos: number) {
    this.fecha = fecha;
    this.droga = droga;
    this.resultado = resultado;
    this.descripcion = descripcion;
    this.indicaciones = indicaciones;
    this.motivo = motivo;
    this.peso = peso;
    this.nroNacidos = nroNacidos;
  }
}
