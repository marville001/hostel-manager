import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginComponent implements OnInit {
  user: FormGroup = new FormGroup({});

  error: string = "";
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private customValidator: CustomvalidationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.patternValidator(),
        ]),
      ],
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
      this.authService.loginUser(obj).subscribe(
        (result) => {
          localStorage.setItem('token', result.token);
          this.authService.user = result.user;
          this.router.navigate(['/admin']);
        },
        ({error}) => {
          this.error = error.message;
        }
      );
    }
  }
}
