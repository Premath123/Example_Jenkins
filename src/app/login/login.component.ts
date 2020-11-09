import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { AuthService } from '../auth.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

import {RoleModel} from "../models/RoleModel";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService, private formBuilder: FormBuilder,) {}
  submitted = false;
  login = new Login();
  
  public loginForm: FormGroup;
  private formSumitAttempt: boolean;
  public roles: RoleModel[] = [];

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      role: [null]
    });
    this.addRoles();
    
   
  }

  addRoles(){
    var role1:RoleModel =new RoleModel();
    role1.id="1";
    role1.name="Avon";
    this.roles.push(role1);
    var role2:RoleModel =new RoleModel();
    role2.id="2";
    role2.name="Customer";
    this.roles.push(role2);
    var role3:RoleModel =new RoleModel();
    role3.id="3";
    role3.name="Partner";
    this.roles.push(role3);
    var role4:RoleModel =new RoleModel();
    role4.id="4";
    role4.name="Representative";
    this.roles.push(role4);

  }

  public onLoginClick() {
    this.auth.sendToken(this.login.email);
   
  }

  signIn() {
    console.log(" in signIn");
//login logic here
      this.router.navigate(['/dashboard']);

  }

  isFieldValid(field: string) {
    return (
      (!this.loginForm.get(field).valid &&
        this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      "has-error": this.isFieldValid(field),
      "has-feedback": this.isFieldValid(field)
    };
  }

}
