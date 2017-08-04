import { Component, OnInit } from '@angular/core';
import { student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 students : student[]=[
   new student("Srikanth",new Date(),"5th class","2nd Section","https://daks2k3a4ib2z.cloudfront.net/585ce7a5ffa743027bcf5304/58dd39e6ad466bd82b9fbe1c_CrsCat10v2z74006.jpg"),
   new student("Lokesh",new Date(),"5th class","1st Section","https://daks2k3a4ib2z.cloudfront.net/585ce7a5ffa743027bcf5304/58dd39e6ad466bd82b9fbe1c_CrsCat10v2z74006.jpg")
 ];

 constructor() { }

  ngOnInit() {
  }

}
