import { Component, OnInit, Input,OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit,OnChanges {

  // constructor(private sub:DesignutilityService) {
  //   this.sub.userName.subscribe(uN=>{
  //     this.userName=uN;
  //   })
  //  }
  constructor(){
    console.log('constructor Call')
  }

  ngOnInit(): void {
    console.log('ngOnInit Call')

  }
  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges Called');
    console.log(changes.myValue.currentValue);

  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck Call')
    
  }
// userName:string='manish';
// onUpdate(data){
//   // this.userName=data.value;
//   this.sub.userName.next(data.value);
// }
@Input() myValue:string='manish'
datee= new Date();
}
