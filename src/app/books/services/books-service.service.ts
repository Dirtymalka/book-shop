import { Injectable } from '@angular/core';
import {BOOKS} from '../../shared/mock-books';
import {IBook} from '../models/books/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: IBook[] | [];

  constructor() {
    this.books = BOOKS;
  }

  getBooks(): IBook[] {
    return this.books;
  }
}
