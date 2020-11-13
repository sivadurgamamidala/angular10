import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'], 
  encapsulation:  ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy{
  // @Input() element : { type: string, name: string, content: string};
  @Input('srvElement') element : { type: string, name: string, content: string};
  @Input() name: string;
  constructor() {
    console.log("constructor called!")
   }
   ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChnages called!");
    console.log(changes)
   }
  ngOnInit(): void {
    console.log("ngoninit called!")
  }
  ngDoCheck(){
    console.log("ngDoCheck called!");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentinit called!");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit! called!")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy called!")
  }
}
