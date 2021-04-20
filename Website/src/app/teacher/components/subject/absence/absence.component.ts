import { Component, OnInit } from '@angular/core';
import { ClassOutputModel } from 'src/app/models/class.output-model';
import { StudentOutputModel } from 'src/app/models/student.output-model';
import { ClassService } from 'src/app/services/class.service';
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
  constructor(private classService: ClassService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.classService.getAll().subscribe((items) => {
      this.classes = items;
    })
  }
  
  handleChangeClass(event: any){
    this.currentClassId = event.value;
    this.studentService.getStudentsAssignedToClass(this.currentClassId).subscribe((items) => {
      this.students = items;
    })
  }

  handleSave() {
    alert('Zapisano');
  }
}
