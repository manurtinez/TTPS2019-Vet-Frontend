import { User } from '../models/user';

export class UsuarioService {
  static users: User[] = [
    {
      usuario: 'manu123',
      password: '1234',
      rol: 'Dueno'
    },
    {
      usuario: 'manuu',
      password: '12345',
      rol: 'Veterinario'
    }
  ];

}
