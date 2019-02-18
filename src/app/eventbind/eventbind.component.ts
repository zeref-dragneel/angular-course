import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.scss']
})
export class EventbindComponent implements OnInit {
  buttonStatus:string = "Not clicked yet";
  constructor() { }

  ngOnInit() {
  }
  buttonEvent(){
    this.buttonStatus = "Button was clicked";
  }

}
