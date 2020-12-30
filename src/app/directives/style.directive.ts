import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private elRef: ElementRef, private r: Renderer2) {
    this.r.setStyle(elRef.nativeElement, 'color', 'blue');
    // elRef.nativeElement.style.color = 'red';
  }
}
