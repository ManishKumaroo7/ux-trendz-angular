import { Component, OnInit } from '@angular/core';
import {Messageservice} from '../services/services'
import { DesignutilityService } from '../services/designutility.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor(private msg:DesignutilityService) { }
  lelemerii={};

  ngOnInit() {
    // this.lelemerii=this.msg.car; 
    this.msg.car().subscribe(carData=>this.lelemerii=carData);
  }
  
  
}
