import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackgroundDirective} from '../cart/directives/background.directive';
import {SizeBorderDirective} from './directives/size-border.directive';
import {OrderByPipe} from './pipes/order-by.pipe';
import {DemoMaterialModule} from '../material-module';



@NgModule({
  declarations: [
    BackgroundDirective,
    SizeBorderDirective,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    DemoMaterialModule
  ],
  exports: [
    BackgroundDirective,
    SizeBorderDirective,
    OrderByPipe,
    CommonModule,
    DemoMaterialModule
  ]
})
export class SharedModule { }
