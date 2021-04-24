import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
redirectClassList() {
  this.router.navigateByUrl('/admin/class/list');
}
redirectTeacherList() {
  this.router.navigateByUrl('/admin/teacher/list');
}
redirectApprenticeList() {
  this.router.navigateByUrl('/admin/apprentice/list');
}
redirectSubjectList() {
  this.router.navigateByUrl('/admin/subject/list');
}
redirectSchedulerList() {
  this.router.navigateByUrl('/admin/scheduler');
}
redirectLogin() {
  this.router.navigateByUrl('/login');
}
change_color() {

  var color = document.getElementById("title").style.backgroundColor;
/*	if (color == "red"){
	  	document.getElementById("title").style.backgroundColor="green";
	}
	else {
      document.getElementById("title").style.backgroundColor="blue";


  color.backgroundColor="black";	}*/
}

  mouseOver() {

    document.getElementById('title').style.backgroundColor = "#00b900";
}
  mouseOut(){
    document.getElementById('title').style.backgroundColor = "#00c800";
  }
  mouseOver1() {

    document.getElementById('title1').style.backgroundColor = "#00b900";
  }
    mouseOut1(){
      document.getElementById('title1').style.backgroundColor = "#00c800";
    }

    mouseOver2() {

      document.getElementById('title2').style.backgroundColor = "#00b900";
    }
      mouseOut2(){
        document.getElementById('title2').style.backgroundColor = "#00c800";
      }
      mouseOver3() {

        document.getElementById('title3').style.backgroundColor = "#00b900";
      }
        mouseOut3(){
          document.getElementById('title3').style.backgroundColor = "#00c800";
        }
        mouseOver4() {

          document.getElementById('title4').style.backgroundColor = "#00b900";
        }
          mouseOut4(){
            document.getElementById('title4').style.backgroundColor = "#00c800";
          }
          mouseOver5() {

            document.getElementById('title5').style.backgroundColor = "#00b900";
          }
            mouseOut5(){
              document.getElementById('title5').style.backgroundColor = "#00c800";
            }
}
