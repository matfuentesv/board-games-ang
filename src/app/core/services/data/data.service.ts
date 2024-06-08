// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Products, ProductsResponse} from "../../../shared/models/products";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/json/data.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(this.jsonUrl);
  }
}
