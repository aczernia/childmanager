import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from '../../../../services/teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {
  teacherForm: FormGroup;  
  constructor(private router: Router, private teacherService: TeacherService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.teacherForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  save(){
    if (this.teacherForm.valid){
      this.teacherService.add({
        name: this.teacherForm.get('name').value,
        lastName: this.teacherForm.get('lastName').value,
        email: this.teacherForm.get('email').value,
        password: this.teacherForm.get('password').value,
        phoneNumber: this.teacherForm.get('phoneNumber').value
      }).subscribe(() => {
        this.router.navigateByUrl('/admin/teacher/list');
      })
    }
  }
  redirectToMenu(){
    this.router.navigateByUrl('/admin/menu');
  }
}
