import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter your email!';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPassErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter your password!'
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

}
