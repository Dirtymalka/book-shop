import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private configuration: {};
  constructor() { }

  getConfiguration(): {} {
    return this.configuration;
  }

  updateConfiguration(conf): void {
    this.configuration = {
      ...this.configuration,
      ...conf,
    };
  }

}
