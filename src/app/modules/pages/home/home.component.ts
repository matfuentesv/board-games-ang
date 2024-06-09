import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {Products} from "../../../shared/models/products";
import {DataService} from "../../../core/services/data/data.service";
import {MatDialog} from "@angular/material/dialog";
import {CartService} from "../../../core/services/cart/cart.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    CurrencyPipe,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit {

  products: Products[] = [];

  constructor(private dataService: DataService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(x => {
      this.products = x.outstanding;
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    console.log('Producto agregado al carrito:', product); // Añadido para depuración
    alert(`${product.name} ha sido agregado al carrito.`);
  }

}
