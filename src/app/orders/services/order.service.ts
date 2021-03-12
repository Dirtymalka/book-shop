import { Injectable } from '@angular/core';
import {ICartProduct} from '../../cart/models/cart/CartProductModel';
import {IBook} from '../../books/models/books/BookModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: IBook[];
  constructor() { }

  getOrders(): IBook[] {
    return this.orders;
  }

  postOrders(orders): void {
    this.orders = orders;
  }

}
