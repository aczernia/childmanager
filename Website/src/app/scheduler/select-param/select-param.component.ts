import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassOutputModel } from 'src/app/models/class.output-model';
import { ClassService } from 'src/app/services/class.service';



interface Clas {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-select-param',
  templateUrl: './select-param.component.html',
  styleUrls: ['./select-param.component.css']
})
export class SelectParamComponent implements OnInit {

  displayedColumns = ['name'];
  items: ClassOutputModel[];
  selectedValue: string;
  selectedCar: string;
  isVisible = true;
  isHidden = true;

  classes: Clas[] = [

  ];
  teachers: Clas[] = [



  ];
  constructor(private router: Router, private classService: ClassService) { }

  ngOnInit() {
    this.classService.getAll().subscribe((items) => {
      this.items = items;
  })
}


  scheduler(){
      this.router.navigateByUrl('view');
  }
  visible(){
    this.isVisible = !this.isVisible;
  }
  hidden(){
    this.isHidden = false;
  }
}
