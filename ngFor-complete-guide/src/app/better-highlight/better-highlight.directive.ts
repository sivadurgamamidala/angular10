import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }
  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','blue');
    // this.renderer.setStyle(this.elRef.nativeElement,'color','white');
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','blue');
    this.renderer.setStyle(this.elRef.nativeElement,'color','white');
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','transparent');
    this.renderer.setStyle(this.elRef.nativeElement,'color','black');
  }
}
