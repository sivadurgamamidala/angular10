import { style } from '@angular/animations';
import{ Directive, ElementRef, OnInit } from '@angular/core'
@Directive({
    selector:'[app-basic-highlight]'
})
export class BasicHighlight implements OnInit{
    constructor(private elementRef:ElementRef){
        
    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor='green';
        this.elementRef.nativeElement.style.color='white';
        this.elementRef.nativeElement.style.fontStyle = 'italic';
        this.elementRef.nativeElement.style.fontSize = "20px";
        this.elementRef.nativeElement.style.padding = "5px";
    }
}