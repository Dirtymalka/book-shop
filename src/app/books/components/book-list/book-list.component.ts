import {Component, Input, OnInit} from '@angular/core';
import {BooksService} from '../../services/books-service.service';
import {IBook} from '../../models/books/BookModel';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books: Promise<IBook[]>;
  @Input() isAdmin: boolean;

  constructor(private booksService: BooksService, private cartService: CartService) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  updateCart(newBook): void {
    this.cartService.addBook(newBook);
  }

}
