import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { StudentAbsenceOutputModel } from 'src/app/models/student.output-model';

@Component({
  selector: 'app-absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbsenceListComponent implements OnInit {
  @Input() absences: StudentAbsenceOutputModel[];

  @Output() justify = new EventEmitter<StudentAbsenceOutputModel>();

  displayedColumns = [
    'date',
    'justified',
    'controls'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
