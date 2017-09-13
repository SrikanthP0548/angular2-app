import { StudentEditComponent } from './students/student-edit/student-edit.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { StudentStartComponent } from './students/student-start/student-start.component';
import { MarkslistComponent } from './markslist/markslist.component';
import { StudentsComponent } from './students/students.component';
import { Routes,RouterModule,Router } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes:Routes =[
    { path:'',redirectTo:'students',pathMatch:'full'},
    { path :'students',component:StudentsComponent, children:[
        {path:'',component:StudentStartComponent},
        {path:'new',component:StudentEditComponent},
        {path:':id',component:StudentDetailComponent},
        {path:':id/edit',component:StudentEditComponent}
    ]},
    { path:'markslist',component:MarkslistComponent}
];
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {
    
}