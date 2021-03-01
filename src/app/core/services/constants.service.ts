import {Injectable, InjectionToken} from '@angular/core';

const sToken = new InjectionToken<string>('ConstantsService');

@Injectable({
  providedIn: 'root',

})
export class ConstantsService {
  constructor() {
  }
}
