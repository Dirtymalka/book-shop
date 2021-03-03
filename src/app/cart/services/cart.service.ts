import { Injectable } from '@angular/core';
import {ICartProduct} from '../models/cart/CartProductModel';
import {IBook} from '../../books/models/books/BookModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: ICartProduct[] | [] = [];
  totalQuantity = 0;
  totalSum: number;

  constructor() { }

  getBooksFromCart(): ICartProduct[] | [] {
    return this.cartProducts;
  }

  addBook(newBook: IBook): void {
    const index = this.cartProducts.findIndex((book: ICartProduct, idx) => book.id === newBook.id);
    const copy = {...newBook};
    copy.count = copy.count !== undefined ? copy.count : 1;
    if (index >= 0) {
      const increasedCount = this.cartProducts[index].count + 1;
      this.cartProducts = [
        ...this.cartProducts.slice(0, index),
        {
          ...this.cartProducts[index],
          count:  increasedCount
        },
        ...this.cartProducts.slice(index + 1)
      ];
      this.updateCartData();
      return;
    }
    this.cartProducts = [...this.cartProducts, copy];
    this.updateCartData();
  }

  removeBook(bookId): void {
    const index = this.cartProducts.findIndex((book: IBook, idx) => book.id === bookId);
    this.cartProducts = [
      ...this.cartProducts.slice(0, index),
      ...this.cartProducts.slice(index + 1)
    ];
    this.updateCartData();
  }

  increaseQuantity(bookId): void {
    const index = this.cartProducts.findIndex((book: IBook, idx) => book.id === bookId);
    const increasedCount = this.cartProducts[index].count + 1;
    this.cartProducts = [
      ...this.cartProducts.slice(0, index),
      {
        ...this.cartProducts[index],
        count:  increasedCount
      },
      ...this.cartProducts.slice(index + 1)
    ];
    this.updateCartData();
  }

  decreaseQuantity(bookId): void {
    const index = this.cartProducts.findIndex((book: IBook, idx) => book.id === bookId);
    if (this.cartProducts[index].count === 1) {
      this.removeBook(bookId);
      this.updateCartData();
      return;
    }

    const decreasedCount = this.cartProducts[index].count - 1;
    this.cartProducts = [
      ...this.cartProducts.slice(0, index),
      {
        ...this.cartProducts[index],
        count:  decreasedCount
      },
      ...this.cartProducts.slice(index + 1)
    ];
    this.updateCartData();
  }

  updateCartData(): void {
    // @ts-ignore
    this.totalSum = this.cartProducts.reduce((total: number, book: ICartProduct) => total + book.price * book.count, 0).toFixed(2);
    // @ts-ignore
    this.totalQuantity = this.cartProducts.reduce((total: number, book: ICartProduct) => total + book.count, 0).toFixed(2);
  }

  clearCart(): void {
    this.cartProducts = [];
    this.updateCartData();
  }
}
