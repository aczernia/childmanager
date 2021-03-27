import { Component, OnInit } from '@angular/core';
import { ClassOutputModel } from 'src/app/models/class.output-model';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  items: ClassOutputModel[] = [
    {
      name: 'Klasa 1'
    }
  ]
  displayedColumns = ['name'];
  constructor() { }

  ngOnInit(): void {
  }

}
