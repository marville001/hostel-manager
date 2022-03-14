import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User{
  email: string;
  password: string;
  username?:string;
  gender?:string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = "http://localhost:5000/api/v1/signup";
  private _loginUrl = "http://localhost:5000/api/v1/login";

  constructor(private router: Router, private http: HttpClient) {}

  registerUser(user:User) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user: User) {
    return this.http.post<any>(this._loginUrl, user)
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
