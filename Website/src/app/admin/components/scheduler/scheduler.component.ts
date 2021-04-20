import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassOutputModel } from 'src/app/models/class.output-model';
import { LessonPlanOutputModel } from 'src/app/models/lesson-plan.output-model';
import { ClassService } from 'src/app/services/class.service';
import { LessonPlanService } from 'src/app/services/lesson-plan.service';
import * as moment from 'moment';
import { SubjectService } from 'src/app/services/subject.service';
import { SubjectOutputModel } from 'src/app/models/subject.output-model';
import { TeacherOutputModel } from 'src/app/models/teacher.output-model';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private lessonPlanService: LessonPlanService, private classService: ClassService,
    private subjectService: SubjectService, private teacherService: TeacherService, private router: Router) { }
  lessonForm: FormGroup;
  classes: ClassOutputModel[];
  subjects: SubjectOutputModel[] = null;
  teachers: TeacherOutputModel[] = null;
  currentClassId: number;
  lessonPlanItems: LessonPlanOutputModel[] = [];
  ngOnInit(): void {
    this.classService.getAll().subscribe((items) => {
      this.classes = items;
    })
    this.subjectService.getAll().subscribe((items) => {
      this.subjects = items;
    })
    this.teacherService.getAll().subscribe((items) => {
      this.teachers = items;
    })
    this.lessonForm = this.formBuilder.group({
      teacherId: ['', Validators.required],
      subjectId: ['', Validators.required],
      dayOfWeek: [''],
      lessonStart: ['', Validators.required],
      lessonStop: ['', Validators.required],
    })
  }
  handleChangeClass(event: any){
    this.currentClassId = event.value;
    this.lessonPlanService.getForClassId(this.currentClassId).subscribe((items) => {
      this.lessonPlanItems = items;
    })
  }
  getItemsForDayWeek(dayOfWeek: number): LessonPlanOutputModel[] {
    let items = this.lessonPlanItems.filter(a => a.dayOfWeek === dayOfWeek);
    items.sort((a, b) => {
      const aDate = moment(a.lessonStop)
      const bDate = moment(b.lessonStop)
      return aDate.valueOf() - bDate.valueOf();
    })
    return items;
  }
  formatTime(date: Date): string{
    return moment(date).local().format('hh:mm').toString();
  }
  addItem() {
    this.lessonPlanService.addLesson({
      classId: this.currentClassId,
      dayOfWeek: parseInt(this.lessonForm.get('dayOfWeek').value, 10),
      lessonStart: moment(this.lessonForm.get('lessonStart').value, 'hh:mm A').local().add(moment.duration(2,'hours')).toDate(),
      lessonStop: moment(this.lessonForm.get('lessonStop').value, 'hh:mm A').local().add(moment.duration(2,'hours')).toDate(),
      subjectId: parseInt(this.lessonForm.get('subjectId').value, 10),
      teacherId: parseInt(this.lessonForm.get('teacherId').value, 10)
    }).subscribe(() => {
      this.lessonPlanService.getForClassId(this.currentClassId).subscribe((items) => {
      this.lessonPlanItems = items;
    })
    })
  }
  redirectToMenu(){
    this.router.navigateByUrl('/admin/menu');
  }
}
