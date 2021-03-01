import { Injectable } from '@angular/core';

export const GeneratorFactory = (n, service: GeneratorService) => {
  return service.getString(n);
};

@Injectable({
  providedIn: 'root',
  useFactory: GeneratorFactory,
  deps: [GeneratorService]
})
export class GeneratorService {

  constructor(n: number) {
  }

  getString(n): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < n; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

}


