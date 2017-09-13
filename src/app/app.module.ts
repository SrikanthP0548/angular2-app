import { AppRoutingModule } from './app-routing.module';
import { MarkslistService } from './markslist/markslist.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { StudentItemComponent } from './students/student-list/student-item/student-item.component';
import { MarkslistComponent } from './markslist/markslist.component';
import { MarkslistEditComponent } from './markslist/markslist-edit/markslist-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { StudentStartComponent } from './students/student-start/student-start.component';
import { StudentEditComponent } from './students/student-edit/student-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    StudentListComponent,
    StudentDetailComponent,
    StudentItemComponent,
    MarkslistComponent,
    MarkslistEditComponent,
    DropdownDirective,
    StudentStartComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [MarkslistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
