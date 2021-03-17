import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { IBook } from '../../models/books/BookModel';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books-service.service';
import { CartService } from '../../../cart/services/cart.service';
// import {AdminCheckService} from '../../../shared/services/admin-check.service';
// import {MatDialog} from '@angular/material/dialog';
// import {BookModalComponent} from '../../../common/components/book-modal/book-modal.component';
// import {Observable} from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  productCard = false;
  cardWidth: string;
  loading: boolean;
  bookId: string;
  @Input() isAdmin: boolean;
  @Input() book: IBook;
  @Output() delete = new EventEmitter<string>();

  constructor(
    private router: Router,
    private booksService: BooksService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id !== undefined) {
        this.bookId = params.id;
        this.productCard = true;
        this.cardWidth = '100%';
      }
    });
  }

  // при использовании модального окна редактирования была проблема с перерендером

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(BookModalComponent, {
  //     width: '550px',
  //     data: {
  //       name: this.book.name,
  //       description: this.book.description,
  //       author: this.book.author,
  //       category: this.book.category,
  //       price: this.book.price
  //     }
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     const updatingBook = {
  //       ...this.book,
  //       ...result
  //     };
  //     this.booksService.updateBook(updatingBook);
  //     this.router.navigate(['/admin/products']);
  //     this.book = this.booksService.getBookById(this.bookId);
  //     // это наверное нехорошо, но работает
  //     this.cdr.detectChanges();
  //   });
  // }

  editMode(): void {
    this.router.navigate(['/admin/product/edit', this.book.id]);
    // this.openDialog();
  }

  onBuy(): void {
    this.cartService.addBook(this.book);
  }

  deleteBook(): void {
    this.delete.emit(this.book.id);
  }
}
