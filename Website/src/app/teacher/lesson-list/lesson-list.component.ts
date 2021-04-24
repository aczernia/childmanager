import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { LessonOutputModel } from 'src/app/models/lesson.output-model';
import { AbsenceService } from 'src/app/services/absence.service';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  items: LessonOutputModel[];
  displayedColumns = ['topic', 'dateBegin', 'dateEnd']
  constructor(private lessonService: LessonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const classId = parseInt(this.activatedRoute.snapshot.paramMap.get('classId'), 10);
    const teacherId = parseInt(localStorage.getItem('teacherId'), 10)
    if (classId && teacherId) {
        this.lessonService.getLessonsForTeacherAndClass(teacherId, classId).subscribe((items) => {
          this.items = items;
        })
    }
  }

  formatDateTime(date: Date): string{
    return moment(date).local().format('D-MM-YYYY HH:mm').toString();
  }

}
