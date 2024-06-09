import { Injectable } from '@angular/core';
import {Products} from "../../../shared/models/products";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Products[] = [];

  constructor() {
    this.loadCart();
  }

  private saveCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  private loadCart(): void {
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      this.items = JSON.parse(savedItems);
    }
  }

  addToCart(product: Products): void {
    const existingProduct = this.items.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    this.saveCart();
  }

  getItems(): Products[] {
    return this.items;
  }

  clearCart(): Products[] {
    this.items = [];
    this.saveCart();
    return this.items;
  }

  removeItem(productName: string): void {
    this.items = this.items.filter(item => item.name !== productName);
    this.saveCart();
  }

  updateQuantity(productName: string, quantity: number): void {
    const product = this.items.find(item => item.name === productName);
    if (product) {
      product.quantity = quantity;
    }
    this.saveCart();
  }
}
