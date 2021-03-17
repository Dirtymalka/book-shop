import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBook} from '../../../books/models/books/BookModel';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() book: IBook;
  @Output() delete = new EventEmitter<string>();
  @Output() increase = new EventEmitter<string>();
  @Output() decrease = new EventEmitter<string>();

  ngOnInit(): void {
  }

  addBook(): void {
    this.increase.emit(this.book.id);
  }

  removeBook(): void {
    this.decrease.emit(this.book.id);
  }

  deleteBook(): void {
    this.delete.emit(this.book.id);
  }
}
