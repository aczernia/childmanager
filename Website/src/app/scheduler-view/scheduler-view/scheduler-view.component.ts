import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler-view',
  templateUrl: './scheduler-view.component.html',
  styleUrls: ['./scheduler-view.component.css']
})
export class SchedulerViewComponent implements OnInit {

  date = new Date();
  przedmiot = '';
  constructor() { }

  ngOnInit() {


  }

}
