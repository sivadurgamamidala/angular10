import { 
  AfterContentChecked,
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges, 
  ViewEncapsulation, 
  ViewChild,
  ContentChild
} from '@angular/core';

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
  @ViewChild('heading' ,{static: true}) header: ElementRef;
  @ContentChild('contentParagraph',{static: true}) paragraph: ElementRef;
  constructor() {
    console.log("constructor called!");
   }
   ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChnages called!");
    console.log(changes);
   }
  ngOnInit(): void {
    console.log("ngoninit called!");
    console.log("Text Content:" + this.header.nativeElement.textContent);
    console.log("text content of paragraph: "+ this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(){
    console.log("ngDoCheck called!");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentinit called!");
    console.log("text content of paragraph: "+ this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit! called!");
    console.log("Text Content:"+this.header.nativeElement.textContent);
  }
  ngOnDestroy(){
    console.log("ngOnDestroy called!")
  }
}
