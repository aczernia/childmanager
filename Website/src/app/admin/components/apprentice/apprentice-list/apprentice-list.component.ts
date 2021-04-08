import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApprenticeOutputModel } from 'src/app/models/apprentice.output-model';

@Component({
  selector: 'app-apprentice-list',
  templateUrl: './apprentice-list.component.html',
  styleUrls: ['./apprentice-list.component.css']
})
export class ApprenticeListComponent implements OnInit {
  items: ApprenticeOutputModel[] = [
    {
      birthDate: new Date(),
      firstName: 'Test',
      lastName: 'Test',
      pesel: '111111111'
    }
  ]
  displayedColumns = ['firstName', 'lastName', 'birthDate', 'pesel']
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToAddForm() {
    this.router.navigateByUrl('/admin/apprentice/create');
  }

}
