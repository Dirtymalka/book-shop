import { Injectable } from '@angular/core';
import {BooksService} from '../../books/services/books-service.service';
import {CartService} from '../../cart/services/cart.service';
import {OrderService} from '../../orders/services/order.service';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(
    private booksService: BooksService,
    private cartService: CartService,
    private orderService: OrderService
  ) { }

  loadInitialData(): void {
    this.booksService.getBooks();
    this.cartService.getBooksFromCart();
    this.orderService.getOrders();
  }

}
