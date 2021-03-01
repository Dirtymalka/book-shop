import { Pipe, PipeTransform } from '@angular/core';
import {ICartProduct} from '../../cart/models/cart/CartProductModel';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(books: ICartProduct[], filter: string, typeFilter: boolean): ICartProduct[] {
    console.log(books);
    const copy = [...books];
    const sorted = copy.sort((bookA: ICartProduct, bookB: ICartProduct) => {
      console.log(bookA, filter, bookB[filter]);
      return bookA[filter] > bookB[filter]
        ? 1
        : bookA[filter] < bookB[filter]
      ? -1
          : 0;
    });
    console.log(sorted);
    return typeFilter ? sorted : sorted.reverse();
  }


}
