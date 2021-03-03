import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {

  constructor() {
  }

  static getString(n): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < n; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

}


