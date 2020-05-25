import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient ) { }

cartItems()
  {
   return this.http.get("http://localhost:4200/assets/cart.json")
  }
} 