import { Marks } from './../shared/marks.model';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class MarkslistService {
  
  marksAdded = new EventEmitter<Marks []>();

  private marksList:Marks[]=[
    new Marks(1,'English',56),
    new Marks(1,'Science',57)
  ];
  constructor() { }
  
  getMarksList(){
    return this.marksList.slice();
  }
  
  onMarksAdded(marksData : Marks){
    this.marksList.push(marksData);
    this.marksAdded.emit(this.marksList.slice(-1));
  }
}
