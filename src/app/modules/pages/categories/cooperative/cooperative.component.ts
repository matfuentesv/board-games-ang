
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService} from "../../../../core/services/data/data.service";
import {Products} from "../../../../shared/models/products";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {DetailProductComponent} from "../../../../shared/components/detail-product/detail-product.component";


@Component({
  selector: 'app-cooperative',
  templateUrl: './cooperative.component.html',
  styleUrls: ['./cooperative.component.scss'],
  standalone: true,
  imports: [CommonModule,MatDialogModule]
})
export class CooperativeComponent implements OnInit {

  products: Products[] = [];

  constructor(private dataService: DataService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(x => {
      this.products = x.cooperative;
    });
  }

  openModal(product: Products){
    this.dialog.open(DetailProductComponent, {
      data: product
    });
  }
}
