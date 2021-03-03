import { NgModule } from '@angular/core';
import {BooksComponent} from './books.component';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookComponent} from './components/book-item/book.component';
import {AdminComponent} from '../admin/admin.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookComponent,
    AdminComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'product/:id',
        component: BookComponent
      },
    ])
  ]
})
export class BooksModule { }
