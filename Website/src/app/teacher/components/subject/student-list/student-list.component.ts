import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { StudentAbsenceOutputModel, StudentAbsencesOutputModel } from 'src/app/models/student.output-model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentListComponent implements OnInit {

  @Input() students: StudentAbsencesOutputModel[];

  displayedColumns = [
    'name',
    'lastName',
    'birthDate',
    'pesel',
    'absences',
    'controls'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getJustifiedAbsences(absences: StudentAbsenceOutputModel[]): StudentAbsenceOutputModel[] {
    return absences.filter(absence => absence.justified)
  }

}
