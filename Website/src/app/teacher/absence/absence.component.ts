import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassOutputModel } from 'src/app/models/class.output-model';
import { LessonPlanOutputModel } from 'src/app/models/lesson-plan.output-model';
import { StudentOutputModel } from 'src/app/models/student.output-model';
import { AbsenceService } from 'src/app/services/absence.service';
import { ClassService } from 'src/app/services/class.service';
import { LessonPlanService } from 'src/app/services/lesson-plan.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit {
  students: StudentOutputModel[];
  classes: ClassOutputModel[];
  currentClassId: number;
  currentLessonPlan: LessonPlanOutputModel;
  lessonForm: FormGroup;
  checkedStudentsIds = [];
  constructor(private formBuilder: FormBuilder, 
    private studentService: StudentService, 
    private lessonPlanService: LessonPlanService, 
    private router: Router,
    private absenceService: AbsenceService) { }

  ngOnInit(): void {
    this.lessonForm = this.formBuilder.group({
      topic: [''],
    })
    const value = parseInt(localStorage.getItem('teacherId'), 10);
    this.lessonPlanService
    .getForTeacherId(value)
    .subscribe((response?: LessonPlanOutputModel) => {
      if (response) {
        this.currentLessonPlan = response;
        this.studentService.getPlainStudentsAssignedToClass(this.currentLessonPlan.class.id).subscribe((items) => {
          this.students = items;        
        })
      }
      else
      {
        this.router.navigateByUrl('/teacher/lesson-list');
      }
    });
   
  }

  get absenceFormArray(): FormArray {
    return this.lessonForm.controls.absence as FormArray;
  }

  handleChangeClass(event: any) {
    this.currentClassId = event.value;
    this.studentService.getStudentsAssignedToClass(this.currentClassId).subscribe((items) => {
      this.students = items;
    })
  }

  handleCheckboxChange(event: any){
    if (event.target.checked) {
      this.checkedStudentsIds.push(parseInt(event.target.value, 10));
    }else {
      this.checkedStudentsIds = this.checkedStudentsIds.filter(a => a !== parseInt(event.target.value, 10));
    }
  }

  handleSave() {
    this.absenceService.addLesson({
      beginDate: this.currentLessonPlan.lessonStart,
      classId: this.currentLessonPlan.class.id,
      endDate: this.currentLessonPlan.lessonStop,
      subjectId: this.currentLessonPlan.subject.id,
      teacherId: this.currentLessonPlan.teacher.id,
      topic: this.lessonForm.get('topic').value,
      wasPresentsStudentsIds: this.checkedStudentsIds
    }).subscribe(() => {
      this.router.navigateByUrl('/teacher/student-list');
    })
  }
}
