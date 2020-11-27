import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumber:number[] = [];
  oddNumber:number[] = [];
  
  onIntervalFired(firedInterval:number){
    if(firedInterval % 2 === 0){
      this.evenNumber.push(firedInterval);
    }else{
      this.oddNumber.push(firedInterval);
    }
  //  this.oddNumber.push(firedInterval);
  }
}
