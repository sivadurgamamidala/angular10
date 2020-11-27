import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() oddNumbers: number[] = [];
  @Output() evenNumbers: number[] = [];
  onIntervalFired(firedNumber: number){
    // console.log(firedNumber);
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }
    else{
      this.oddNumbers.push(firedNumber);
    }
  }
}
