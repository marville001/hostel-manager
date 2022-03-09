import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throws } from 'assert';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    // return !!localStorage.getItem('token');
    return this.getToken() !== null;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
