import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  isLoggedIn(): boolean {
    // Verificar si el usuario está autenticado (por ejemplo, si existe en el local storage)
    return !!localStorage.getItem('user');
  }

  getUsername(): string | null {
    // Obtener el nombre de usuario desde el local storage
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.username || null;
  }

  logout(): void {
    // Limpiar la información de autenticación al hacer logout
    localStorage.removeItem('user');
    // Redirigir al usuario a la página de login u otra página
    this.router.navigate(['/login']);
  }
}
