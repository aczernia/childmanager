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
const routes: Routes = [
  {
    path: 'apprentice',
    children: [
      {path: 'create', component: ApprenticeFormComponent},
      {path: 'list', component: ApprenticeListComponent}
    ]
  }
]
@NgModule({
  declarations: [ApprenticeFormComponent, ApprenticeListComponent, AdminComponent, ClassFormComponent, ClassListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModuleModule
  ]
})
export class AdminModule { }
