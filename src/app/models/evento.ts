export class Evento {
  tipo_evento: string;
  id: number;
  mascotaId: number;
  fecha: Date;
  droga: string;
  resultado: string;
  descripcion: string;
  indicaciones: string;
  motivo: string;
  peso: number;
  nro_nacidos: number;

  constructor(
    tipo_evento: string,
    id: number,
    mascotaId: number,
    fecha: Date,
    droga: string,
    resultado: string,
    descripcion: string,
    indicaciones: string,
    motivo: string,
    peso: number,
    nroNacidos: number) {
    this.tipo_evento = tipo_evento;
    this.id = id;
    this.mascotaId = mascotaId;
    this.fecha = fecha;
    this.droga = droga;
    this.resultado = resultado;
    this.descripcion = descripcion;
    this.indicaciones = indicaciones;
    this.motivo = motivo;
    this.peso = peso;
    this.nro_nacidos = nroNacidos;
  }
}
