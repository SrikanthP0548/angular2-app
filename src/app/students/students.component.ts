import { StundentlistService } from './stundentlist.service';
import { 
  Component,
  OnInit,
  EventEmitter,
  Input } from '@angular/core';

import { student } from './student.model'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers:[StundentlistService]
})
export class StudentsComponent implements OnInit {
  
  selectedStudent = false;
  studentData :student;
  constructor(private studentlistService:StundentlistService) { }

  ngOnInit() {
    this.studentlistService.selectedStudent
      .subscribe(
        (student:student)=>{
          this.selectedStudent=true;
          this.studentData = student;
        }
      );
  }
}
