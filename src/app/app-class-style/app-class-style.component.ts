import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-class-style',
  templateUrl: './app-class-style.component.html',
  styleUrls: ['./app-class-style.component.css']
})
export class AppClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
emptS=[];
forwad(data){
this.emptS.push({
  name:data.value
});
}
delete(item){
  this.emptS.splice(item,1);
}
}
