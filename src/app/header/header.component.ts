import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,Output {
  
  @Output() featureSelected = new EventEmitter<string>();
   
  constructor() { }

  ngOnInit() {
   }
  
  onChangeView(data){
      this.featureSelected.emit(data);
  }

}
