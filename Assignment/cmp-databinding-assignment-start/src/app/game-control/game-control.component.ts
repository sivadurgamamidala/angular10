import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  disabled:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  onStartGame(){
    this.isDisabled();
    this.interval = setInterval(()=>{
      // console.log(this.lastNumber + 1);
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++
    },1000)
  }
  onPauseGame(){
    clearInterval(this.interval);
    this.isDisabled();
  }
  isDisabled(){
    return this.disabled = !this.disabled;
  }
}
