import { Component, OnInit ,Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()  select:boolean=false;
  @Input() product:string='';
  @Output() checkout=false;
  @Output() productp:string='';
  
  passTO(){
    this.productp=this.product;
    this.checkout=true;
    }
    
}
