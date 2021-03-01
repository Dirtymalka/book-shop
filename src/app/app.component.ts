import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  implements OnInit, AfterViewInit{
  @ViewChild('title', {static: true}) title;
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.title.nativeElement.textContent = 'Book Shop';
  }
}
