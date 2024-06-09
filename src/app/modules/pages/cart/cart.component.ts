import { Component, OnInit } from '@angular/core';
import {Products} from "../../../shared/models/products";
import {CartService} from "../../../core/services/cart/cart.service";
import {CommonModule, CurrencyPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [
    CurrencyPipe,
    FormsModule,
    NgIf,
    NgForOf,
    NgOptimizedImage,
    CommonModule
  ],
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: Products[] = [];
  total: number = 0;
  discount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log('Items en el carrito:', this.items);
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.items.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
    this.discount = this.items.reduce((acc, item) => acc + ((item.price * (item.discount / 100)) * (item.quantity || 1)), 0);
  }

  updateQuantity(productName: string, quantity: number | undefined): void {
    if (quantity === undefined || quantity < 1) {
      quantity = 1;
    }
    this.cartService.updateQuantity(productName, quantity);
    this.calculateTotal();
  }

  removeItem(productName: string): void {
    this.cartService.removeItem(productName);
    this.items = this.cartService.getItems();
    this.calculateTotal();
  }

  clearCart(): void {
    this.items = this.cartService.clearCart();
    this.total = 0;
    this.discount = 0;
  }
}
