import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {
  classForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private classService: ClassService) {
    this.classForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  save() {
    if (this.classForm.valid){
      this.classService.add({
        name: this.classForm.get('name').value
      }).subscribe(() => {
        this.router.navigateByUrl('/admin/class/list');
      })
    }
  }
  redirectToMenu(){
    this.router.navigateByUrl('/admin/menu');
  }
}
