import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprenticeFormComponent } from './components/apprentice/apprentice-form/apprentice-form.component';
import { ApprenticeListComponent } from './components/apprentice/apprentice-list/apprentice-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { AdminComponent } from './components/admin.component';
import { ClassFormComponent } from './components/class/class-form/class-form.component';
import { ClassListComponent } from './components/class/class-list/class-list.component';
import { TeacherService } from '../services/teacher.service';
import { StudentService } from '../services/student.service';
import { ClassService } from '../services/class.service';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: 'apprentice',
    children: [
      { path: 'create', component: ApprenticeFormComponent},
      { path: 'list', component: ApprenticeListComponent}
    ]
  },
  {
    path: 'class',
    children: [
      { path: 'create', component: ClassFormComponent},
      { path: 'list', component: ClassListComponent}
    ]
  }
]
@NgModule({
  declarations: [ApprenticeFormComponent, ApprenticeListComponent, AdminComponent, ClassFormComponent, ClassListComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModuleModule
  ],
  providers: [ClassService, StudentService, TeacherService]
})
export class AdminModule { }
