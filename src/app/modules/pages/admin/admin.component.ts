import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {NgIf} from "@angular/common";

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  productForm: FormGroup;
  userForm: FormGroup;
  currentSection: string = 'products';
  pdfSrc: string | null = null;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      image: ['']
    });

    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      userRole: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  showSection(event: Event, section: string): void {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    this.currentSection = section;
  }

  onSubmitProduct(): void {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      // Aquí puedes agregar la lógica para manejar el envío del formulario de productos
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  onSubmitUser(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      // Aquí puedes agregar la lógica para manejar el envío del formulario de usuarios
    } else {
      this.userForm.markAllAsTouched();
    }
  }

}
