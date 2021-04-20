import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceComponent } from './components/subject/absence/absence.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from '../material-module/material-module.module';


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
    RouterModule.forChild(routes),
    MaterialModuleModule
  ]
})
export class TeacherModule { }
