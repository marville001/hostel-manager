import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleLogin() {
    localStorage.setItem(
      'token',
      'reyuruyruybcsgdgsdghds.dggsrtee3y356d.7654gdbdvbvbdg'
    );
    this.router.navigate(['/admin', 'home']);
  }
}
