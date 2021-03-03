import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {CartComponent} from './cart/cart.component';
import {BookComponent} from './books/components/book-item/book.component';
import {EditBookComponent} from './common/components/edit-book/edit-book.component';
import {AdminComponent} from './admin/admin.component';
import {CanActivateGuard} from './admin/can-activate.guard';
import {CartModule} from './cart/cart.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full'
  },
  {
    path: 'products-list',
    component: BooksComponent
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  // {
  //   path: 'product/:id',
  //   component: BookComponent
  // },
  {
    path: 'admin',
    canActivate: [CanActivateGuard],
    children: [
      {
        path: 'products',
        component: AdminComponent,
      },
      // узнать, как распознавать пути похожие
      {
        path: 'product',
        // component: BooksComponent,
        children: [
          {
            path: 'edit/:id',
            component: EditBookComponent,
          },
          {
            path: 'edit/add',
            component: EditBookComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
