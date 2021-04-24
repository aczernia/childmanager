import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { StudentAbsencesOutputModel, StudentAbsenceOutputModel } from 'src/app/models/student.output-model';

@Component({
  templateUrl: './justification.component.html',
  styleUrls: ['./justification.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JustificationComponent implements OnInit {

  student: StudentAbsencesOutputModel;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService) { }

  ngOnInit(): void {
    const { studentId } = this.route.snapshot.params;
    this.studentService.getStudent(studentId).subscribe(student => this.student = student);
  }

  justify(absence: StudentAbsenceOutputModel) {
    console.log(absence);
  }
}
