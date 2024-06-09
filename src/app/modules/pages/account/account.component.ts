import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {Router, RouterLink} from '@angular/router';
import {AuthService} from "../../../core/services/auth/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf
  ],

})
export class AccountComponent {

  accountForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.accountForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      password: [''],
      confirmPassword: ['']
    });
  }

  ngOnInit(): void {
    const user = this.authService.getUser();
    if (user) {
      this.accountForm.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        address: user.address
      });
    }
  }

  onSubmit(): void {
    if (this.accountForm.valid) {

      console.log(this.accountForm.value);

    }
  }
}
