import {Component, DoCheck, OnInit} from '@angular/core';
import {CartService} from './services/cart.service';
import {ICartProduct} from './models/cart/CartProductModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck {
  totalQuantity = 0;
  selected = 'name';
  descending = true;
  cart: ICartProduct[];
  totalPrice = 0;
  constructor(private  cartService: CartService) { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.totalQuantity = this.cartService.totalQuantity;
    this.totalPrice = this.cartService.totalSum;
    this.cart = this.cartService.getBooksFromCart();
  }

  trigger(): void {
    this.descending = !this.descending;
  }

  increase(bookId): void {
    this.cartService.increaseQuantity(bookId);
    this.cart = this.cartService.getBooksFromCart();
  }

  decrease(bookId): void {
    this.cartService.decreaseQuantity(bookId);
    this.cart = this.cartService.getBooksFromCart();
  }

  deleteBook(bookId): void {
    this.cartService.removeBook(bookId);
    this.cart = this.cartService.getBooksFromCart();
  }

  clearCaart(): void {
    this.cartService.clearCart();
  }
}
