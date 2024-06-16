import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule
} from '@angular/forms';
import {NgClass, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../../core/services/auth/auth.service";
import {User} from "../../../shared/models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterLink,
    NgClass,
  ],
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: [''],
      age: ['', [Validators.required, Validators.min(13)]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*\\d).{6,18}$'),
        Validators.minLength(6),
        Validators.maxLength(18)
      ]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }


  get validFirstName(){
    return this.registerForm.get('firstName')?.invalid && this.registerForm.get('firstName')?.touched;
  }

  get validLastName(){
    return this.registerForm.get('lastName')?.invalid && this.registerForm.get('lastName')?.touched;
  }

  get validEmail(){
    return this.registerForm.get('email')?.invalid && this.registerForm.get('email')?.touched;
  }

  get validPhone(){
    return this.registerForm.get('phone')?.invalid && this.registerForm.get('phone')?.touched;
  }

  get validAge(){
    return this.registerForm.get('age')?.invalid && this.registerForm.get('age')?.touched;
  }

  get validPassword(){
    return this.registerForm.get('password')?.invalid && this.registerForm.get('password')?.touched;
  }
  get validConfirmPassword(){
    return this.registerForm.get('confirmPassword')?.invalid && this.registerForm.get('confirmPassword')?.touched;
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Lógica para manejar el registro
      console.log(this.registerForm.value);
      const user: User = {
        ...this.registerForm.value,
        roles: ['customer']
      };
      console.log(user);
      this.authService.setUser(user);
      if (this.authService.login(user.email, user.password)) {
        this.router.navigate(['/home']);
      }
    }else {
      return Object.values(this.registerForm.controls)
        .forEach(control => {
          control.markAsTouched();
        });
    }
  }

  onClear(): void {
    this.registerForm.reset();
  }
}
