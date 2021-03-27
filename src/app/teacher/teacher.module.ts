import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceComponent } from './components/subject/absence/absence.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'absence',
    component: AbsenceComponent
  },
]

@NgModule({
  declarations: [AbsenceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TeacherModule { }
