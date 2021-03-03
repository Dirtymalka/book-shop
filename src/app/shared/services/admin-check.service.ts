import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminCheckService {
  isAdmin = false;
  constructor() { }
  togglePermissions(): void {
    this.isAdmin = !this.isAdmin;
  }
}
