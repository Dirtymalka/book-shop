import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {BookCategories, IBook} from '../../models/books/BookModel';
import {DemoMaterialModule} from '../../../material-module';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {
  @Input() book: IBook;
  @Output() addBook = new EventEmitter<IBook>();
  constructor() { }

  ngOnInit(): void {
  }

  onBuy(): void {
    this.addBook.emit(this.book);
  }

}
