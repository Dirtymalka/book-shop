import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSizeBorder]'
})
export class SizeBorderDirective {
  click = true;
  @Input('appSizeBorder') color: string = null;

  constructor(private el: ElementRef, private r: Renderer2) { }

  @HostListener('click', ['$event.target']) onClick(target): void {
    if (target.closest('button')) {
      return;
    }
    if (this.click) {
      this.r.setStyle(this.el.nativeElement, 'color', this.color);
      this.r.setStyle(this.el.nativeElement, 'border', '1px green solid');
      this.click = !this.click;
      return;
    }
    this.r.setStyle(this.el.nativeElement, 'color', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
    this.click = !this.click;
  }
}
