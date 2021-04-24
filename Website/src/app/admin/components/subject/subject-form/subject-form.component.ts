import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherOutputModel } from 'src/app/models/teacher.output-model';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {
  subjectForm: FormGroup;
  teachers: TeacherOutputModel[];
  constructor(private subjectService: SubjectService, private teacherService: TeacherService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.teacherService.getAll().subscribe((items) => {
      this.teachers = items;
    })
    this.subjectForm = this.formBuilder.group({
      name: ['', Validators.required],
      teacher: ['', Validators.required]
    })
  }

  save(){
    if (this.subjectForm.valid){
      this.subjectService.add({
        name: this.subjectForm.get('name').value,
        teacherId: this.subjectForm.get('teacher').value
      }).subscribe(() => {
        this.router.navigateByUrl('/admin/subject/list');
      })
    }
  }
  redirectToMenu(){
    this.router.navigateByUrl('/admin/menu');
  }
}
