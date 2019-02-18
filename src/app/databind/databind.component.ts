import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.scss']
})
export class DatabindComponent implements OnInit {
  buttonState:boolean = true;

  constructor() {setTimeout(()=>{
    this.buttonState = false;
  },2000)}

  ngOnInit() {
  }

}
