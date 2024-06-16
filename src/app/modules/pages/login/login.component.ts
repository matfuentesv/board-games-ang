import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router, RouterLink} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    NgClass
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   loginForm!: FormGroup;
  isValidUser: boolean = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*\\d).{6,18}$'),
        Validators.minLength(6),
        Validators.maxLength(18)
      ]]
    });
  }

  get validEmail() {
    return this.loginForm.get('email')?.invalid && this.loginForm.get('email')?.touched;
  }

  get validPassword() {
    return this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (this.authService.login(email, password)) {
        this.router.navigate(['/home']);
      } else {
        this.isValidUser = false;
      }
    }
  }

  onClear(): void {
    this.loginForm.reset();
  }
}
