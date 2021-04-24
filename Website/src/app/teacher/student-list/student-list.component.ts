import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { StudentAbsenceOutputModel, StudentAbsencesOutputModel } from 'src/app/models/student.output-model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: StudentAbsencesOutputModel[] = [];
  displayedColumns = [
    'name',
    'lastName',
    'birthDate',
    'pesel',
    'absences',
    'controls'
  ]

  constructor(private studentsService: StudentService, private router: Router) { }

  ngOnInit(): void {
    const classId = localStorage.getItem('classId');
    this.studentsService.getStudentsAssignedToClass(parseInt(classId, 10)).subscribe((items) => {
      this.students = items;
    })
  }

  getJustifiedAbsences(absences: StudentAbsenceOutputModel[]): StudentAbsenceOutputModel[] {
    return absences.filter(absence => absence.justified)
  }

  redirectToAbsenceList(studentId: number) {
    this.router.navigateByUrl(`/teacher/absence-list/${studentId}`);
  }

  formatDateTime(date: Date): string{
    return moment(date).local().format('D-MM-YYYY HH:mm').toString();
  }
}
