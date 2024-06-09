import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogModule,
  MatDialogTitle
} from "@angular/material/dialog";
import {Products} from "../../models/products";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [
    MatDialogModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatButton,
    MatDialogClose,
    MatIcon,
    MatIconButton,
    CurrencyPipe
  ],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss'
})
export class DetailProductComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Products) { }
}
