import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.scss']
})
export class InterpolateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myString:string = "String";
  myNumber:number = 100;
  returnString:string = "method";
  myMethod(){
  return this.returnString;
  }

}
