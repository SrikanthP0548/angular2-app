import { StundentlistService } from './../stundentlist.service';
import { Component, OnInit} from '@angular/core';
import { student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students : student[]=[];

 constructor(private studentlistService:StundentlistService) { }

  ngOnInit() {
      this.students = this.studentlistService.getstudentList();
  }

}
