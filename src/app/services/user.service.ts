import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', active: true },
    { id: 2, name: 'Мария Петрова', email: 'maria@example.com', active: false },
    {
      id: 3,
      name: 'Алексей Сидоров',
      email: 'alexey@example.com',
      active: true,
    },
    {
      id: 4,
      name: 'Елена Кузнецова',
      email: 'elena@example.com',
      active: false,
    },
    {
      id: 5,
      name: 'Дмитрий Смирнов',
      email: 'dmitry@example.com',
      active: true,
    },
  ];

  getUsers(): User[] {
    return this.users;
  }
}
