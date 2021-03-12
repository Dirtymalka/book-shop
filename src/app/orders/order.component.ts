import { Component, OnInit } from '@angular/core';
import {OrderService} from './services/order.service';
import {IBook} from '../books/models/books/BookModel';

@Component({
  selector: 'app-orders',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: IBook[];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

}
