import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentOutputModel } from 'src/app/models/student.output-model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-apprentice-list',
  templateUrl: './apprentice-list.component.html',
  styleUrls: ['./apprentice-list.component.css']
})
export class ApprenticeListComponent implements OnInit {
  items: StudentOutputModel[] = [];
  displayedColumns = ['name', 'lastName', 'birthDate', 'pesel', 'class']
  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAll().subscribe((items) => {
      this.items = items;
    })
  }

  redirectToAddForm() {
    this.router.navigateByUrl('/admin/apprentice/create');
  }
  redirectToMenu(){
    this.router.navigateByUrl('/admin/menu');
  }

}
