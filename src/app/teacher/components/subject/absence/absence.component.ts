import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit {
  students: string[] = ['Artur Czernia', 'Wojciech Bryś', 'Olga Jurek', 'Maciej Kara', 'Mateusz Gajda' ]
  constructor() { }

  ngOnInit(): void {
  }

}
