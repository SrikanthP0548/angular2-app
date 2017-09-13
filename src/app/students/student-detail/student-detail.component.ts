import { StundentlistService } from './../stundentlist.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { MarkslistService } from './../../markslist/markslist.service';
import { Marks } from './../../shared/marks.model';
import { 
  Component, 
  OnInit,
  Input } from '@angular/core';
import { student } from '../student.model'
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() studentData:student;
  id:number;
  constructor(private mlService:MarkslistService,private activatedRout:ActivatedRoute,private studentService:StundentlistService ) { 
  
  }

  ngOnInit() {
    this.activatedRout.params.subscribe(
      (params:Params)=>{
        this.id= +params['id'];
        this.studentData = this.studentService.getStudentDetailsById(this.id);
      }
    )
  }

  passStudentMarks(marks:Marks[]){
    marks.forEach(e => {
        this.mlService.onMarksAdded(e);
    })
  }
}
