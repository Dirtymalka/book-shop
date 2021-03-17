import { Injectable } from '@angular/core';
import {BOOKS} from '../../shared/mockdata/mock-books';
import {IBook} from '../models/books/BookModel';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Observable<IBook[]>;

  constructor(private http: HttpClient) {
    // this.books = BOOKS;
  }

  getBookById(id): Observable<IBook> {
    console.log(id);
    // return this.books.find((book: IBook) => book.id === id);
    return this.http.get<IBook>(`http://localhost:3000/books/${id}`);
  }

  getBooks(): Observable<IBook[]> {
    // return new Promise((resolve) => {
    //   resolve(this.books);
    // });
    this.fetchBooks();
    return this.books;
  }

  fetchBooks(): void {
    this.books = this.http.get<any[]>('http://localhost:3000/books');
  }

  updateBook(updatingBook: IBook): void {
    this.http.put<IBook[]>(`http://localhost:3000/books/${updatingBook.id}`, updatingBook).subscribe();
    this.fetchBooks();

  //   const index = this.books.findIndex((book: IBook) => book.id === updatingBook.id);
  //   if (index < 0) {
  //     this.books = [
  //       ...this.books,
  //       updatingBook
  //     ];
  //     return;
  //   }
  //   this.books = [
  //     ...this.books.slice(0, index),
  //     updatingBook,
  //     ...this.books.slice(index + 1)
  //   ];
  }

  createBook(book: IBook): void {
    this.http.post<IBook[]>(`http://localhost:3000/books`, book).subscribe();
    this.fetchBooks();
  }

  deleteBook(bookId: string): void {
    this.http.delete<IBook[]>(`http://localhost:3000/books/${bookId}`).subscribe();
    this.fetchBooks();
  }
}
