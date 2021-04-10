import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-apprentice-form',
  templateUrl: './apprentice-form.component.html',
  styleUrls: ['./apprentice-form.component.css']
})
export class ApprenticeFormComponent implements OnInit {
  apprenticeForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private studentService: StudentService) { 
    this.apprenticeForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      pesel: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  save() {
    if (this.apprenticeForm.valid){
      this.studentService.add({
        birthDate: this.apprenticeForm.get('dateOfBirth').value,
        name: this.apprenticeForm.get('name').value,
        lastName: this.apprenticeForm.get('lastName').value,
        pesel: this.apprenticeForm.get('pesel').value
      }).subscribe(() => {
        this.router.navigateByUrl('/admin/apprentice/list');
      })
    }
  }

}
