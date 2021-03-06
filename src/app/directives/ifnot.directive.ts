import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {
  @Input() set ifNot(condition: boolean){
    if(!condition){
      //show
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      //hide
      this.viewContainer.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
