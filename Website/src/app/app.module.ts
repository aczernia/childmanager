import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SchedulerViewComponent } from './scheduler-view/scheduler-view/scheduler-view.component';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherModule } from './teacher/teacher.module';
import { ClassService } from './services/class.service';
import { StudentService } from './services/student.service';
import { TeacherService } from './services/teacher.service';
import { HttpClientModule } from '@angular/common/http';
import {DatePipe} from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { LessonPlanService } from './services/lesson-plan.service';
import { SubjectService } from './services/subject.service';
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
    path: 'view',
    component: SchedulerViewComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [

    FormsModule,
    MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    AdminModule,
    TeacherModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [ClassService, TeacherService, StudentService, DatePipe, LessonPlanService, SubjectService],
  bootstrap: [AppComponent],

})
export class AppModule { }
