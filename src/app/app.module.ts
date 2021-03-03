import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DemoMaterialModule} from './material-module';

import { AppComponent } from './app.component';
import {BookComponent} from './books/components/book-item/book.component';
import {CartItemComponent} from './cart/components/cart-item/cart-item.component';
import {BookListComponent} from './books/components/book-list/book-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {CartComponent} from './cart/cart.component';
import {CartListComponent} from './cart/components/cart-list/cart-list.component';
import { BooksComponent } from './books/books.component';
import { AboutComponent } from './layouts/components/about/about.component';
import { BackgroundDirective } from './cart/directives/background.directive';
import { SizeBorderDirective } from './shared/directives/size-border.directive';
import { OrderByPipe } from './shared/pipes/order-by.pipe';
import {AppRoutingModule} from './app-routing.module';
import { BookModalComponent } from './common/components/book-modal/book-modal.component';
import { EditBookComponent } from './common/components/edit-book/edit-book.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CartComponent,
    CartItemComponent,
    CartItemComponent,
    BookListComponent,
    CartListComponent,
    BooksComponent,
    AboutComponent,
    BackgroundDirective,
    SizeBorderDirective,
    OrderByPipe,
    BookModalComponent,
    EditBookComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
