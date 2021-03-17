import {Component, Input, OnInit} from '@angular/core';
import {BookCategories, IBook} from '../../../books/models/books/BookModel';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from '../../../books/services/books-service.service';
import {EMPTY_BOOK} from '../../../shared/mockdata/mock-books';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  @Input() book: IBook = EMPTY_BOOK;
  form: FormGroup;
  options = Object.values(BookCategories);

  constructor(private route: ActivatedRoute, private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id !== undefined && params.id !== 'add') {
        const bookId = params.id;
        // this.booksService.getBookById(bookId).subscribe(book => this.book = book);
        this.booksService.getBookById(bookId).subscribe(book => {
          console.log(book);
          this.book = {...book};
          // this.cdr.detectChanges();
        });
        return;
      }
      this.book = EMPTY_BOOK;
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: new FormControl('', [Validators.required, Validators.minLength(2)]),
      author: new FormControl('', [Validators.required]),
      category: new FormControl(this.book.category || '', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      imgUrl: new FormControl('')
    });
  }

  // accept(): void {
  //   this.booksService.updateBook(this.book);
  //   this.router.navigate(['/admin/products']);
  // }
  cancel(): void {
    this.router.navigate(['/admin/products']);
  }

  submit(): void {
    if (this.book.id === '') {
      this.booksService.createBook(this.book);
    } else {
      this.booksService.updateBook(this.book);
    }
    this.router.navigate(['/admin/products']);
  }
}
