import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }
  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','green');
    this.renderer.setStyle(this.elRef.nativeElement,'color','white');
  }
}
