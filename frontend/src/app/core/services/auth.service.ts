import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { ApiserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string;

  constructor(private service: ApiserviceService, private router: Router) { }

  login(user: User) {
    this.service.login(user).subscribe(data => {
      this.token = data.token;
      this.router.navigateByUrl('/superteam');
    });
  }

  
  signup(user: User) {
    this.service.signup(user).subscribe(data => {
      this.token = data.token;
      this.router.navigateByUrl('/superteam');
    });
  }

  getToken(): string {
    return this.token;
  }
}