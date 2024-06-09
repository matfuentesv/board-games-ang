import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  constructor() { }

  addToCart(product: any): void {
    const existingProduct = this.items.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  getItems(): any[] {
    return this.items;
  }

  clearCart(): any[] {
    this.items = [];
    return this.items;
  }

  removeItem(productName: string): void {
    this.items = this.items.filter(item => item.name !== productName);
  }

  updateQuantity(productName: string, quantity: number): void {
    const product = this.items.find(item => item.name === productName);
    if (product) {
      product.quantity = quantity;
    }
  }
}
