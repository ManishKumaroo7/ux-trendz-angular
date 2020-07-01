import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private sub:DesignutilityService) {
    this.sub.userName.subscribe(uN=>{
      this.userName=uN;
    })
   }

  ngOnInit(): void {
  }
  userName:string='manish';

}
