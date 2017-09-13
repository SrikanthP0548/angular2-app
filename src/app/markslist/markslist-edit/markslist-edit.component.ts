import { MarkslistService } from './../markslist.service';
import { Marks } from './../../shared/marks.model';
import { Component, 
  OnInit,
  ElementRef,
  ViewChild } from '@angular/core';

@Component({
  selector: 'app-markslist-edit',
  templateUrl: './markslist-edit.component.html',
  styleUrls: ['./markslist-edit.component.css']
})
export class MarkslistEditComponent implements OnInit {
  
  @ViewChild('marksInput') marksInput : ElementRef;
  @ViewChild('subjectInput') subjectInput : ElementRef;
   @ViewChild('idInput') idtInput : ElementRef;

  constructor(private markslistService:MarkslistService) {  }

  ngOnInit() {
  }
 
   onAddMarks(){
    const subject = this.subjectInput.nativeElement.value;
    const marks = this.marksInput.nativeElement.value;
    const sId = this.idtInput.nativeElement.value;
    const marksData : Marks  = new Marks(parseInt(sId),subject,parseInt(marks));
    this.markslistService.onMarksAdded(marksData);
    }
}
