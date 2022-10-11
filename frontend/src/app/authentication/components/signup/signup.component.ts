import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User = {
    name: "",
    firstname: "",
    email: "",
    password: "" 
  }


  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSignup() {
    this.auth.signup(this.user);
  }

}