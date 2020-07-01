import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(private sub:DesignutilityService) {
    this.sub.userName.subscribe(uN=>{
      this.userName=uN;
    })
   }

  ngOnInit(): void {
  }
  userName:string='manish';

}
