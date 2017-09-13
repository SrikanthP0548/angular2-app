import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StundentlistService } from './../students/stundentlist.service';
import { MarkslistService } from './markslist.service';
import { Component, OnInit } from '@angular/core';
import { Marks } from '../shared/marks.model';
import { student } from '../students/student.model';

@Component({
  selector: 'app-markslist',
  templateUrl: './markslist.component.html',
  styleUrls: ['./markslist.component.css'],
  providers:[StundentlistService]
})
export class MarkslistComponent implements OnInit {
  
  marksDetails :{ sid:number,name:string,subject:string,marks:number}[]=[];
  marks:Marks[]=[];
  students:student [] =[];

  constructor(private markslistService:MarkslistService,private studentlistService : StundentlistService) { }

  ngOnInit() {
    this.marks = this.markslistService.getMarksList();
    this.students = this.studentlistService.getstudentList();
    this.updateMarkslist();
    this.markslistService.marksAdded
      .subscribe(
        (marks : Marks[]) =>{
          this.marks = marks;
          this.updateMarkslist();
        }
      )
  }
  updateMarkslist(){
    this.students.forEach(student =>{
      this.marks.forEach(mark => {
        if((student.sid === mark.sid))
           {
             this.marksDetails.push({sid:mark.sid,name:student.name,subject:mark.sname,marks:mark.marks});
           } 
      });
     })
  }

}
