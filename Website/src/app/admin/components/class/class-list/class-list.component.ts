import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassOutputModel } from 'src/app/models/class.output-model';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  displayedColumns = ['name'];
  items: ClassOutputModel[];
  constructor(private router: Router, private classService: ClassService) { }

  ngOnInit(): void {
    this.classService.getAll().subscribe((items) => {
      this.items = items;
    })
  }

  redirectToAddForm() {
    this.router.navigateByUrl('/admin/class/create');
  }
  redirectToMenu(){
    this.router.navigateByUrl('/admin/menu');
  }

}
