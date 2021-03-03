import { Injectable } from '@angular/core';
import {BOOKS} from '../../shared/mockdata/mock-books';
import {IBook} from '../models/books/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: IBook[] | [];

  constructor() {
    this.books = BOOKS;
  }

  getBookById(id): IBook {
    return this.books.find((book: IBook) => book.id === id);
  }

  getBooks(): Promise<IBook[]> {
    return new Promise((resolve) => {
      resolve(this.books);
    });
  }

  updateBook(updatingBook: IBook): void {
    const index = this.books.findIndex((book: IBook) => book.id === updatingBook.id);
    if (index < 0) {
      this.books = [
        ...this.books,
        updatingBook
      ];
      return;
    }
    this.books = [
      ...this.books.slice(0, index),
      updatingBook,
      ...this.books.slice(index + 1)
    ];
  }
}
