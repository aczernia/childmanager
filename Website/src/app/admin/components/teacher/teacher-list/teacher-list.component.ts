import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherOutputModel } from '../../../../models/teacher.output-model';
import { TeacherService } from '../../../../services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  displayedColumns = ['name', 'phoneNumber', 'email'];
  items: TeacherOutputModel[];
  constructor(private router: Router, private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacherService.getAll().subscribe((items) => {
      this.items = items;
    })
  }

  redirectToAddForm() {
    this.router.navigateByUrl('/admin/teacher/create');
  }
  redirectToMenu(){
    this.router.navigateByUrl('/admin/menu');
  }
}
