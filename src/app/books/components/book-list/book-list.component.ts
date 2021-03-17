import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../../services/books-service.service';
import { IBook } from '../../models/books/BookModel';
import { CartService } from '../../../cart/services/cart.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]> = of([]);
  // @Input() books: IBook[];
  @Input() isAdmin: boolean;

  constructor(
    private booksService: BooksService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.books$ = this.booksService.getBooks();
    // this.booksService.getBooks().subscribe((books) => {
    //   this.books = books;
    //   console.log([...this.books]);
    //   console.log(Object.assign([], books));
    // });
  }

  updateCart(newBook): void {
    this.cartService.addBook(newBook);
  }

  deleteBook(id): void {
    this.booksService.deleteBook(id);
    this.books$ = this.booksService.getBooks();
  }
}
