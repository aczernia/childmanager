import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { StudentAbsenceOutputModel } from 'src/app/models/student.output-model';
import { AbsenceService } from 'src/app/services/absence.service';

@Component({
  selector: 'app-absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.css'],
})
export class AbsenceListComponent implements OnInit {
  absences: StudentAbsenceOutputModel[];

  @Output() justify = new EventEmitter<StudentAbsenceOutputModel>();

  displayedColumns = [
    'date',
    'justified',
    'controls'
  ];

  constructor(private activatedRoute: ActivatedRoute, private absenceService: AbsenceService) { }

  ngOnInit(): void {
    const studentId = parseInt(this.activatedRoute.snapshot.paramMap.get('studentId'), 10);
    this.absenceService.getAbsencesForStudent(studentId).subscribe((items) => {
      this.absences = items;
    })
  }

  justifyAbsence(id: number) {
    this.absenceService.justifyAbsence(id)
    .subscribe(() => {
      const studentId = parseInt(this.activatedRoute.snapshot.paramMap.get('studentId'), 10);
      this.absenceService.getAbsencesForStudent(studentId).subscribe((items) => {
        this.absences = items;
      })
    })
  }

  formatDateTime(date: Date): string{
    return moment(date).local().format('D-MM-YYYY HH:mm').toString();
  }
}
