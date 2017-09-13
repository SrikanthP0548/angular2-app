import { Directive,Input,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor() { }
  
  @HostListener('click') mouseclicked(){
      this.isOpen = !this.isOpen;
  }

}
