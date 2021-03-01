import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICartProduct} from '../../models/cart/CartProductModel';
import {OrderByPipe} from '../../../shared/pipes/order-by.pipe';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  providers: [OrderByPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit {
  @Input() cart: ICartProduct[];
  @Input() selected: string;
  @Input() descending: boolean;
  @Output() delete = new EventEmitter<string>();
  @Output() increase = new EventEmitter<string>();
  @Output() decrease = new EventEmitter<string>();
  totalPrice = 0;

  constructor(private orderByPipe: OrderByPipe) { }

  ngOnInit(): void {
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.cart = this.orderByPipe.transform(this.cart, this.selected, this.descending);
  // }

  increaseCount(bookId): void {
    this.increase.emit(bookId);
  }

  decreaseCount(bookId): void {
    this.decrease.emit(bookId);
  }

  deleteBook(bookId): void {
    this.delete.emit(bookId);
  }

  trackByItems(index, item): number {
    return item.count;
  }
}
