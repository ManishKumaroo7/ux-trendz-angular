import { Component, OnInit, ViewChild, ElementRef, Renderer2, ContentChild, HostListener } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';
import { Comp2Component } from '../comp2/comp2.component';
import * as $ from "jquery";
// declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rendere:Renderer2) {
    // this.sub.userName.subscribe(uN=>{
    //   this.userName=uN;
    // })
   }
   
   userName="Manish";
@ViewChild('ele') ele:ElementRef;
@ViewChild(Comp2Component) child:Comp2Component;
@ContentChild('childContent') contentchild:ElementRef;
  ngOnInit()  {
  console.log('home component'+ this.ele);
  console.log('this is contentChild'+this.contentchild);
  var num=1;

  $(window).scroll(function(){
    num +=1;
  console.log('scrolloing'+''+ num)});

  }
ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  // console.log('hoem cmp')
  // this.ele.nativeElement.style.backgroundColor="green";
  // this.ele.nativeElement.classList='land'
  // this.ele.nativeElement.textContent='papa.pkd'
  console.log(this.child)
  this.rendere.setStyle(this.ele.nativeElement,'backgroundColor','blue')
  this.rendere.addClass(this.ele.nativeElement,'Blue');
  this.rendere.setAttribute(this.ele.nativeElement,'title','meratitle');
  console.log('this is contentChild'+this.contentchild);


}
@HostListener('window:scroll',['$event']) myScroll(){
  console.log('host scrolling')
}

chngChild(){
  this.child.userName='kumar'
};
callChild(){
  this.child.update();
};
};
