import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderComponent} from './order.component';
import {ProductsComponent} from './components/products/products.component';
import {OrdersFormComponent} from './components/orders-form/orders-form.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {CartComponent} from '../cart/cart.component';
import {BookComponent} from '../books/components/book-item/book.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [OrderComponent, ProductsComponent, OrdersFormComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderComponent
      },
    ])

  ]
})
export class OrderModule {
}
