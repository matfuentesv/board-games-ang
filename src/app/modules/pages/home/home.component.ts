import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {Products} from "../../../shared/models/products";
import {DataService} from "../../../core/services/data/data.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  products: Products[] = [];

  constructor(private dataService: DataService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(x => {
      this.products = x.outstanding;
    });
  }

}
