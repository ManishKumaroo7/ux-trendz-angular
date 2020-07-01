import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http:HttpClient) { }
  alert(){
    alert('fuck me');
}
// car=[
//   {name:'verna',model:'maruti'},
//   {name:'i20',model:'suzuki'},
//   {name:'xuv',model:'hero'},
  
  
// ];
car():Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}
userName= new Subject<any>();
}