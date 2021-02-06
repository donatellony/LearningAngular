import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() fontWeight = 'normal';

  @HostBinding('style.color') elColor = null;
  constructor(private elRef: ElementRef, private r: Renderer2) {
    // elRef.nativeElement.style.color = 'red';
  }

  @HostListener('click', ['$event']) onClick(event: Event){

  }

  @HostListener('mouseenter') onEnter(){
    // this.r.setStyle(this.elRef.nativeElement, 'color', this.color);
    // this.r.setStyle(this.elRef.nativeElement, 'fontWeight', this.fontWeight);
    this.elColor = this.color;
  }

  @HostListener('mouseleave') onLeave(){
    // this.r.setStyle(this.elRef.nativeElement, 'color', null);
    // this.r.setStyle(this.elRef.nativeElement, 'fontWeight', null);
    this.elColor = null;
  }
}
