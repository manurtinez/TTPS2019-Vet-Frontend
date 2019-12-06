export class User {
  public usuario: string;
  public password: string;
  public token?: string;

  constructor(username: string, password: string) {
    this.usuario = username;
    this.password = password;
  }
}
