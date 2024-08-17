import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {


  @Input()
  appMask :string ="";

  maskData : string ="****";

  originalData: string ="";

  constructor(private eleRef :ElementRef){}

@HostListener("mouseenter")
mouseEntr()  {
  this.originalData =this.appMask;
 this.eleRef.nativeElement.value=this.originalData;
  console.log("from the directive mouse enter "+this.originalData);

}

@HostListener("mouseleave")
mouseOut(){

 this.appMask=this.originalData;

 this.eleRef.nativeElement.value=this.maskData;

console.log("mouse exit mask ***  "+this.maskData)

}
}
