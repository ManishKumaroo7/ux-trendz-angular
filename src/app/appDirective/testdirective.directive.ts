import { Directive, ElementRef,Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(private ele:ElementRef, private render:Renderer2) {
   //  this.render.setStyle(this.ele.nativeElement,'backgroundColor','green')
   }
// color:string;
//    red(color){
// this.render.setStyle(this.ele.nativeElement,'backgroundColor',color)
//    }
//    green(color){
//     this.render.setStyle(this.ele.nativeElement,'backgroundColor',color)
//        }
@HostBinding('style.backgroundColor') bgColor; 
    
@HostListener('click') mouseover(){
         //  this.render.setStyle(this.ele.nativeElement,'backgroundColor','lightgreen')
      this.bgColor= 'red';
      // this.render.setStyle(this.ele.nativeElement,'backgroundColor','green')
      }
}
 