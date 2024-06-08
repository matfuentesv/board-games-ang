
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from "../../../core/services/data/data.service";
import {Products} from "../../../shared/models/products";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DetailProductComponent} from "../../../shared/components/detail-product/detail-product.component";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterLink]
})
export class AccountComponent   {



  constructor() { }




}
