import { User } from '../models/user';

export class UsuarioService {
  static users: User[] = [
    {
      usuario: 'manu123',
      password: '1234',
      rol: 'ttps.spring.model.Dueno'
    },
    {
      usuario: 'manuu',
      password: '12345',
      rol: 'ttps.spring.model.Veterinario'
    }
  ];

}
