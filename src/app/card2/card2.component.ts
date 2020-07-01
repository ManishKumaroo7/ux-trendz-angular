import { Component, OnInit } from '@angular/core';
import { Messageservice} from '../services/services';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // ale(){
  //   const msg =new Messageservice;
  //   msg.alert;
  // }
}
