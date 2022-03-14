import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: [],
})
export class SignupComponent implements OnInit {
  user: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private authService: AuthService,
    private router: Router
  ) {}
  // )

  submitted: boolean = false;

  get userFormControl(): any {
    return this.user.controls;
  }

  ngOnInit(): void {
    this.user = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          Validators.compose([
            Validators.required,
            this.customValidator.patternValidator(),
          ]),
        ],
        cPassword: ['', [Validators.required]],
        gender: ['', [Validators.required]],
      },
      {
        validator: this.customValidator.MatchPassword('password', 'cPassword'),
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.user.valid) {
      const obj = {
        name: this.userFormControl.name.value,
        email: this.userFormControl.email.value,
        password: this.userFormControl.password.value,
        gender: this.userFormControl.gender.value,
      };
      this.authService.registerUser(obj).subscribe((result) => {
        localStorage.setItem('token', result.token);
        this.authService.user = result.user;
        this.router.navigate(['/admin']);
      });
    }
  }
}
