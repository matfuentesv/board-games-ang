import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {Router, RouterLink} from '@angular/router';
import {AuthService} from "../../../core/services/auth/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ],

})
export class LoginComponent {

  loginForm: FormGroup;
  isValidUser = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['jane.smith@example.com', [Validators.required, Validators.email]],
      password: ['password456', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (this.authService.login(email, password)) {
        this.router.navigate(['/home']);
      } else {
        this.isValidUser = false;
      }
    }
  }
}
