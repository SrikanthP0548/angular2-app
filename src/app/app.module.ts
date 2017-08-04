import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { StudentItemComponent } from './students/student-list/student-item/student-item.component';
import { MarkslistComponent } from './markslist/markslist.component';
import { MarkslistEditComponent } from './markslist/markslist-edit/markslist-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    StudentListComponent,
    StudentDetailComponent,
    StudentItemComponent,
    MarkslistComponent,
    MarkslistEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
