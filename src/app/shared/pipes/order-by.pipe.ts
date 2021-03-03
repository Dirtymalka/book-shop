import { Pipe, PipeTransform } from '@angular/core';
import {ICartProduct} from '../../cart/models/cart/CartProductModel';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(books: ICartProduct[], filter: string, typeFilter: boolean): ICartProduct[] {
    const copy = [...books];
    const sorted = copy.sort((bookA: ICartProduct, bookB: ICartProduct) => {
      return bookA[filter] > bookB[filter]
        ? 1
        : bookA[filter] < bookB[filter]
      ? -1
          : 0;
    });
    return typeFilter ? sorted : sorted.reverse();
  }


}
