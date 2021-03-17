import {AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {CartService} from './cart/services/cart.service';
import {AdminCheckService} from './shared/services/admin-check.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  implements OnInit, AfterViewInit, DoCheck{
  @ViewChild('title', {static: true}) title;
  totalQuantity = 0;
  isAdmin = false;
  // tslint:disable-next-line:max-line-length
  constructor(private  cartService: CartService, private adminCheckService: AdminCheckService, private router: Router, private http: HttpClient) {
  }
  ngOnInit(): void {
    if (this.isAdmin) {
      // this.router.navigate(['/admin/products']);
      return;
    }
    this.router.navigate(['/']);
  }
  ngDoCheck(): void {
    this.totalQuantity = this.cartService.totalQuantity;
  }
  ngAfterViewInit(): void {
    this.title.nativeElement.textContent = 'Book Shop';
  }

  togglePermissions(): void {
    this.adminCheckService.togglePermissions();
    this.isAdmin = this.adminCheckService.isAdmin;
    if (this.isAdmin) {
      // this.router.navigate(['/admin/products']);
      return;
    }
    this.router.navigate(['/']);
  }

}
