export class User {
  public usuario: string;
  public password: string;
  public token?: string;
  public rol: string;

  constructor(username: string, password: string, rol?: string) {
    this.usuario = username;
    this.password = password;
    if (rol) {
      this.rol = rol;
    }
  }
}
