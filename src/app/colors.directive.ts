import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective {

  constructor(elementRef: ElementRef) {
    debugger;
    console.log("elementRef", elementRef.nativeElement.style.color);
    const a =  elementRef.nativeElement.style.color = 'red';
    
   }

}
