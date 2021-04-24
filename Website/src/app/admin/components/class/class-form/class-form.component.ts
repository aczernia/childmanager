import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherOutputModel } from 'src/app/models/teacher.output-model';
import { ClassService } from 'src/app/services/class.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {
  classForm: FormGroup;
  teachers: TeacherOutputModel[];
  constructor(private formBuilder: FormBuilder, private router: Router, private classService: ClassService, private teacherService: TeacherService) {
    this.classForm = this.formBuilder.group({
      name: ['', Validators.required],
      teacher: ['']
    })
  }

  ngOnInit(): void {
    this.teacherService.getAll().subscribe((items) => {
      this.teachers = items;
    })
  }

  save() {
    if (this.classForm.valid){
      this.classService.add({
        name: this.classForm.get('name').value,
        teacherId: this.classForm.get('teacher').value
      }).subscribe(() => {
        this.router.navigateByUrl('/admin/class/list');
      })
    }
  }
  redirectToMenu(){
    this.router.navigateByUrl('/admin/menu');
  }
}
