import { StundentlistService } from './../../stundentlist.service';
import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';
import { student } from '../../student.model';


@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit,Input,Output {

  @Input() studentData : student;
  @Input() index : number;
  constructor() { }
  
  ngOnInit() {
  }

}
