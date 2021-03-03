import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {BookModalComponent} from '../common/components/book-modal/book-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {BooksService} from './services/books-service.service';
import {IBook} from './models/books/BookModel';
import {AdminCheckService} from '../shared/services/admin-check.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Promise<IBook[]>;
  @Input() isAdmin: boolean;

  constructor(private router: Router,
              private cdr: ChangeDetectorRef,
              private booksService: BooksService,
              private adminCheckService: AdminCheckService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
    // this.isAdmin = this.adminCheckService.isAdmin;
  }

  // при использовании модального окна редактирования была проблема с перерендером
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(BookModalComponent, {
  //     width: '550px',
  //     data: {
  //       name: '',
  //       description: '',
  //       author: '',
  //       category: '',
  //       price: ''
  //     }
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     // tslint:disable-next-line:no-shadowed-variable
  //     const bookId = this.booksService.getBooks().reduce((max, book: IBook) => Math.max(+book.id, max), 0);
  //     const book = {
  //       ...result,
  //       id: bookId
  //     };
  //     this.booksService.updateBook(book);
  //     this.router.navigate(['/admin/products']);
  //     this.books = this.booksService.getBooks();
  //     // это наверное нехорошо, но работает
  //     this.cdr.detectChanges();
  //   });
  // }

  createMode(): void {
    this.router.navigate(['/admin/product/edit/add']);
    // this.openDialog();
  }

}
