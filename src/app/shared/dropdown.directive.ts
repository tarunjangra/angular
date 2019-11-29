import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // if menu is closed. keep the status false.
  @HostBinding('class.open') isOpen: boolean = false;


  // @HostListener('click', ['$event.target']) toggleOpen(){
  //   this.isOpen = !this.isOpen;
  // }

  // To close the even from anywhere in the document.
  @HostListener('document:click', ['$event']) toggleOpen(eventData: Event) {
    this.isOpen = this.elRef.nativeElement.contains(eventData.target)? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef){}

}