import { Component, OnInit } from '@angular/core';
import { LessonOutputModel } from 'src/app/models/lesson.output-model';
import { AbsenceService } from 'src/app/services/absence.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  items: LessonOutputModel[];
  constructor(private absenceService: AbsenceService) { }

  ngOnInit(): void {
    
  }

}
