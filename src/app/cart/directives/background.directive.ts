import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  // @Input()
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostBinding('style.background') elBackground: string;

  @HostListener('mouseover') onMouseEnter(): void {
    this.elBackground = 'green';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.elBackground = null;
  }
}
