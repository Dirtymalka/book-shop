import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../../books/models/books/BookModel';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from '../../../books/services/books-service.service';
import {EMPTY_BOOK} from '../../../shared/mock-books';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  @Input() book: IBook;

  constructor(private route: ActivatedRoute, private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id !== undefined && params.id !== 'add') {
        const bookId = params.id;
        this.book = this.booksService.getBookById(bookId);
        return;
      }
      this.book = EMPTY_BOOK;
    });
  }

  accept(): void {
    this.booksService.updateBook(this.book);
    this.router.navigate(['/admin/products']);
  }
  cancel(): void {
    this.router.navigate(['/admin/products']);
  }
}
