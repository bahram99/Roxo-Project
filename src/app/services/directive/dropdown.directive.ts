import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef) { }
  @HostBinding('class.Open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  @HostListener('mouseenter') test(){
    this.el.nativeElement.style.transform = 'scale(1.6) , rotate(4deg)';
  }
  @HostListener('mouseleave') test2(){

  }

}
