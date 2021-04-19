import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceComponent } from './components/subject/absence/absence.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { StudentListComponent } from './components/subject/student-list/student-list.component';
import { JustificationComponent } from './components/subject/justification/justification.component';
import { AbsenceListComponent } from './components/subject/absence-list/absence-list.component';


const routes: Routes = [
  {
    path: 'absence',
    component: AbsenceComponent
  },
  {
    path: 'absence/:studentId',
    component: JustificationComponent
  },
]

@NgModule({
  declarations: [AbsenceComponent, StudentListComponent, JustificationComponent, AbsenceListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModuleModule
  ]
})
export class TeacherModule { }
