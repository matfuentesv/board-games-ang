import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../core/services/cart/cart.service";
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    NgOptimizedImage,
    CurrencyPipe
  ],
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any[] = [];
  total: number = 0;
  discount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log('Items en el carrito:', this.items); // Añadido para depuración
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    this.discount = this.items.reduce((acc, item) => acc + ((item.originalPrice - item.price) * item.quantity), 0);
  }

  updateQuantity(productName: string, quantity: number): void {
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
