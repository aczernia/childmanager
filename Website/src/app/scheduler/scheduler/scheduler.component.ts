import { Component, OnInit } from '@angular/core';
import {ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-scheduler',
  template: '<ejs-schedule></ejs-schedule>',
  //templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
