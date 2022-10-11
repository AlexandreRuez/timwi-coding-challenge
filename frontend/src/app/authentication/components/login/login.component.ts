import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = {
    email: "",
    password: "" 
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.auth.login(this.user);
  }

}