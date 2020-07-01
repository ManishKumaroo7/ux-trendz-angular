import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
booean=true;
  constructor() { }
  @HostBinding('class.active') bgColor; 
  @HostListener('click') mouseover(){

    //  this.render.setStyle(this.ele.nativeElement,'backgroundColor','lightgreen')
        this.bgColor= !this.bgColor;
        // this.render.setStyle(this.ele.nativeElement,'backgroundColor','green')
        }
}
