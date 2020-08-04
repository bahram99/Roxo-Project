import {Directive, ElementRef, OnInit} from '@angular/core';
import {ElementArrayFinder} from 'protractor';

@Directive({
  selector: '[appAlign]'
})
export class AlignDirective implements OnInit {

  constructor(private text: ElementRef) {}

  ngOnInit() {
    this.text.nativeElement.style.textAlign = 'center';
  }
}
