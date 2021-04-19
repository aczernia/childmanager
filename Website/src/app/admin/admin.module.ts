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
import { SchedulerComponent } from '../admin/components/scheduler/scheduler.component';
import { SubjectListComponent } from './components/subject/subject-list/subject-list.component';
import { SubjectFormComponent } from './components/subject/subject-form/subject-form.component';
import { SubjectService } from '../services/subject.service';
import { TeacherListComponent } from './components/teacher/teacher-list/teacher-list.component';
import { TeacherFormComponent } from './components/teacher/teacher-form/teacher-form.component';
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
  },
  {
    path: 'subject',
    children: [
      { path: 'create', component: SubjectFormComponent},
      { path: 'list', component: SubjectListComponent}
    ]
  },
  {
    path: 'teacher',
    children: [
      { path: 'create', component: TeacherFormComponent},
      { path: 'list', component: TeacherListComponent}
    ]
  },
  {
    path: 'scheduler',
    component: SchedulerComponent
  }
]
@NgModule({
  declarations: [ApprenticeFormComponent, ApprenticeListComponent, AdminComponent, ClassFormComponent, ClassListComponent, SchedulerComponent, SubjectListComponent, SubjectFormComponent, TeacherListComponent, TeacherFormComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModuleModule,
  ],
  providers: [ClassService, StudentService, TeacherService, SubjectService]
})
export class AdminModule { }
