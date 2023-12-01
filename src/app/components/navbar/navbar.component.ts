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
    return !!localStorage.getItem('user');
  }

  getUsername(): string | null {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.username || null;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
