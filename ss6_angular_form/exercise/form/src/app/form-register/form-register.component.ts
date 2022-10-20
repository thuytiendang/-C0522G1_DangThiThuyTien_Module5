import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  registerFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerFormGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.minLength(6), Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
      }, this.checkPassword),
      country: new FormControl('', Validators.required),
      age: new FormControl('',
        [Validators.required, this.checkAge18]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('',
        [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    });
  }

  getValue(): void {
    console.log(this.registerFormGroup.value);
  }

  checkAge18(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();
    return curYear - formYear >= 18 ? null : {invalid18: true};
  }

  checkPassword(passwordGroup: AbstractControl): any {
    const temp1 = passwordGroup.value.password;
    const temp2 = passwordGroup.value.confirmPassword;
    if (temp1 === temp2) {
      return null;
    }
    return {invalidPass: true};
  }
}
