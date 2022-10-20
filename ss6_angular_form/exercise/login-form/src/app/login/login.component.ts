import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(6)])
    })
  }

  getValue() {
    console.log(this.loginFormGroup.value);
  }
}
