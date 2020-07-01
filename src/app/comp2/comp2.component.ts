import { Component, OnInit, ViewChild,ElementRef, ContentChild, Renderer2 } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';
import { TestdirectiveDirective } from '../appDirective/testdirective.directive';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private renderer:Renderer2){
   }

   @ViewChild('eleRef') eleRef:ElementRef;
   @ContentChild('childContent') childcon:ElementRef;
   @ViewChild(TestdirectiveDirective) testdir:TestdirectiveDirective
   userName:string='manish';
  ngOnInit(): void {
    console.log(`hello this is view Child ${this.eleRef}`);
    // console.log(`this is content child of comp2${this.childcon}`)

  }
  update(){
    alert('manish kumr');
    var text=this.renderer.createText('this text is created by Rendere');
    this.renderer.appendChild(this.childcon.nativeElement,text);

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(`this is content child of comp2${this.childcon}`);
    this.renderer.setStyle(this.childcon.nativeElement,'color','red');
  }
  
  // bgRed(clor){
  //   this.testdir.red(clor);
  // }
}
