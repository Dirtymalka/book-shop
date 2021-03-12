import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../../books/models/books/BookModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() orders: IBook[];
  constructor() { }

  ngOnInit(): void {
  }

}
