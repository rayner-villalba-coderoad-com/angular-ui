import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin = { email: '', password: ''};
  constructor() { }

  ngOnInit() {
  }

  login(email, password) {
    console.log('EMAIL', email);
    console.log('PASSWORD', password);
  }
}
