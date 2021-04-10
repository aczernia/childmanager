import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherModule } from './teacher/teacher.module';
import { ClassService } from './services/class.service';
import { StudentService } from './services/student.service';
import { TeacherService } from './services/teacher.service';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'teacher',
    loadChildren: './teacher/teacher.module#TeacherModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    AdminModule,
    TeacherModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClassService, TeacherService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
