import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {NgIf} from "@angular/common";

@Component({
  selector: 'app-admin',
  templateUrl: 'cart.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
  }


}
