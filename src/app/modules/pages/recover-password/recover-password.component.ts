
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from "../../../core/services/data/data.service";
import {Products} from "../../../shared/models/products";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DetailProductComponent} from "../../../shared/components/detail-product/detail-product.component";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterLink]
})
export class RecoverPasswordComponent implements OnInit {

  products: Products[] = [];

  constructor(private dataService: DataService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }


}
