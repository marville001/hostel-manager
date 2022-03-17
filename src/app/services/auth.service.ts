import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment as env } from '../../environments/environment';

interface User {
  email: string;
  password: string;
  username?: string;
  gender?: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: any;
  public isLoggingInUser: boolean = false;
  public isRegisteringUser: boolean = false;

  private _registerUrl = env.LOGIN_URL;
  private _loginUrl = env.REGISTER_URL;

  constructor(private router: Router, private http: HttpClient) {}

  registerUser(user: User) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: User) {
    return this.http.post<any>(this._loginUrl, {
      username: user.email,
      password: user.password,
    });
  }

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
