import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apprentice-form',
  templateUrl: './apprentice-form.component.html',
  styleUrls: ['./apprentice-form.component.css']
})
export class ApprenticeFormComponent implements OnInit {
  apprenticeForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.apprenticeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      pesel: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  save() {
    this.router.navigateByUrl('/admin/apprentice/list');
  }

}
