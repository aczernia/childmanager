import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AbsenceComponent } from './absence/absence.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { AbsenceListComponent } from './absence-list/absence-list.component';
import { JustificationComponent } from './justification/justification.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'absence',
    component: AbsenceComponent
  },
  {
    path: 'absence-list/:studentId',
    component: AbsenceListComponent
  },
  {
    path: 'students-list',
    component: StudentListComponent
  },
  {
    path: 'absence/:studentId',
    component: JustificationComponent
  },
  {
    path: 'lesson-list/:classId',
    component: LessonListComponent
  },
]

@NgModule({
  declarations: [AbsenceComponent, StudentListComponent, JustificationComponent, AbsenceListComponent, LessonListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModuleModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }
