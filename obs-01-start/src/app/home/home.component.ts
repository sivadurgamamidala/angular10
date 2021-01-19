import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
   const customIntervalObservable = new Observable(observer => {
    let count = 0;
    setInterval(() => {
      observer.next(count);
      if(count === 4){
        observer.complete();
      }
      if(count>2){
        //this will not executed the completed statement or console.log("completed!") . at the end only shows an error message 
          observer.error(new Error("count is greater than 2!"))
        }
      // if(count>5){
      //   observer.error(new Error("count is greater than 5!"))
      // }
      count++;
    },1000);
    
   });
   this.firstObsSubscription = customIntervalObservable.subscribe(data => {
     console.log(data)
   }, error => {
     console.log(error);
     alert(error.message);
   }, () => {
     console.log("Completed!")
   }
   );
  }

  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe();
  }
}
