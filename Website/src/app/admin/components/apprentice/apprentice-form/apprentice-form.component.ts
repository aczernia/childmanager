import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassOutputModel } from 'src/app/models/class.output-model';
import { ClassService } from 'src/app/services/class.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-apprentice-form',
  templateUrl: './apprentice-form.component.html',
  styleUrls: ['./apprentice-form.component.css']
})
export class ApprenticeFormComponent implements OnInit {
  apprenticeForm: FormGroup;
  classes: ClassOutputModel[];
  constructor(private formBuilder: FormBuilder, private router: Router, private studentService: StudentService, private classService: ClassService) {
    this.apprenticeForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      pesel: ['', Validators.required],
      class: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.classService.getAll().subscribe((items) => {
      this.classes = items;
    })
  }

  save() {
    if (this.apprenticeForm.valid){
      this.studentService.add({
        birthDate: this.apprenticeForm.get('dateOfBirth').value,
        name: this.apprenticeForm.get('name').value,
        lastName: this.apprenticeForm.get('lastName').value,
        pesel: this.apprenticeForm.get('pesel').value,
        classId: this.apprenticeForm.get('class').value
      }).subscribe(() => {
        this.router.navigateByUrl('/admin/apprentice/list');
      })
    }
  }
  redirectToMenu(){
    this.router.navigateByUrl('/admin/menu');
  }

}
