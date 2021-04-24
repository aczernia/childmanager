import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    NgxMaterialTimepickerModule
  ],
  exports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, MatTableModule, MatCheckboxModule, MatSelectModule, 
    MatOptionModule, NgxMaterialTimepickerModule, MatIconModule]
})
export class MaterialModuleModule { }
