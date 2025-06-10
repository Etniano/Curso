import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  usuario: User = new User(
    1,
    'David',
    'Framit',
    'david@example.com',
    'assets/perfil.jpeg',
    '1234'
  );

  modificarUsuario(): void {
  console.log('Nombre del usuario:', this.usuario.Name);
  }
}