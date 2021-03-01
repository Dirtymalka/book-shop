import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService {
  value: { App: 'TaskManager', Ver: '1.0' };
  constructor() { }
}
