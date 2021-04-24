import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginOutputModel } from 'src/app/models/login.output-model';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  save() {
    this.authorizationService.login({
      email: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }).subscribe((response: LoginOutputModel) => {
      if (response.isAdmin){
        this.router.navigateByUrl('/admin/menu');
      }
    })
  }

}
