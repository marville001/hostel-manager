import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginComponent implements OnInit {
  user: FormGroup = new FormGroup({});

  error: string = '';

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitted: boolean = false;

  get userFormControl(): any {
    return this.user.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.user.valid) {
      const obj = {
        email: this.userFormControl.email.value,
        password: this.userFormControl.password.value,
      };
      this.error = "";
      this.authService.isLoggingInUser = true;
      this.authService.loginUser(obj).subscribe(
        (result) => {
          localStorage.setItem('token', result.token);
          this.authService.user = result.user;
          this.authService.isLoggingInUser = false;
          this.router.navigate(['/admin']);
        },
        ({ error }) => {
          this.authService.isLoggingInUser = false;
          this.error = error.message;
        }
      );
    }
  }
}
