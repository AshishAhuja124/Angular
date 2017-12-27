import { Directive, ElementRef,Renderer,Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  @Input()

  appHighlight: number;
  percentage:number;
  constructor(private el:ElementRef,public renderer:Renderer){ }
    
@HostListener('click') onclick(){
  if(this.appHighlight>=75)
  this.el.nativeElement.style.background='blue';
 else 
  this.el.nativeElement.style.background='green';
  
 }


}
