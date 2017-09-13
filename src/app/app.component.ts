import { 
  Component,
  Output,
  EventEmitter } from '@angular/core';

import { Marks } from './shared/marks.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Output {

  @Output() marksData = new EventEmitter<{newMarksData:Marks}>(); 

  title = 'app';
  featureSelected :string = 'student';
  
  viewChanged(data){
    this.featureSelected = data;
  }
  
}
