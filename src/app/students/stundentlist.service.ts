import { Marks } from './../shared/marks.model';
import { Injectable, EventEmitter } from '@angular/core';
import { student } from './student.model';

@Injectable()
export class StundentlistService {
  
  selectedStudent = new EventEmitter<student>();
  
  private studentList:student[]= [
     new student(1,
     "Srikanth",
     new Date(),
     "5th class",
     "2nd Section",
     "https://daks2k3a4ib2z.cloudfront.net/585ce7a5ffa743027bcf5304/58dd39e6ad466bd82b9fbe1c_CrsCat10v2z74006.jpg",
      [new Marks(1,"Science",78),new Marks(1,"English",68)]),
   new student(2,
   "Lokesh",new Date(),
   "5th class",
   "1st Section",
   "https://daks2k3a4ib2z.cloudfront.net/585ce7a5ffa743027bcf5304/58dd39e6ad466bd82b9fbe1c_CrsCat10v2z74006.jpg",
   [new Marks(2,"English",88),new Marks(1,"Maths",98)])];
  constructor() { }
  
  getstudentList(){
    return this.studentList.slice();
  }

  getStudentDetailsById(id){
    return this.studentList[id];
  }
}
