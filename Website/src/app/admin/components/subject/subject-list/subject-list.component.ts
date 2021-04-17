import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectOutputModel } from 'src/app/models/subject.output-model';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  displayedColumns = ['name', 'teacher'];
  items: SubjectOutputModel[];
  constructor(private router: Router, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjectService.getAll().subscribe((items) => {
      this.items = items;
    })
  }

  redirectToAddForm() {
    this.router.navigateByUrl('/admin/subject/create');
  }
}
