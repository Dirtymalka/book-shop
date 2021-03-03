import { NgModule } from '@angular/core';
import {CartComponent} from './cart.component';
import {CartItemComponent} from './components/cart-item/cart-item.component';
import {CartListComponent} from './components/cart-list/cart-list.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {BookComponent} from '../books/components/book-item/book.component';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartListComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartComponent
      },
      {
        path: 'product/:id',
        component: BookComponent
      },
    ])
  ]
})
export class CartModule { }
