import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  onDisplay = false;
  logItem = [];
  onDisplayDetails(){
    this.onDisplay = !this.onDisplay;
    this.logItem.push(this.logItem.length+1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
