import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment as env } from 'src/environments/environment';
import { AdminDto } from '../models/admin.dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admin: AdminDto = new AdminDto();
  private _getLoggedInUserUrl = env.API_URL+'users/me';

  constructor(private router: Router, private http: HttpClient) { }

  getLoggedInUser() {
    this.http.get<any>(this._getLoggedInUserUrl).subscribe(user => {
      this.admin = user;      
    }, error => {
      this.logout()
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
