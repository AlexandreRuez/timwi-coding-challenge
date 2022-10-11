import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  readonly apiUrl = environment.AppApiUrl;

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<any>(this.apiUrl + 'user/login', user);
  }

  signup(user: User) {
    return this.http.post<any>(this.apiUrl + 'user/signup', user);
  }

  addHero(id: Number) {
    return this.http.post<any>(this.apiUrl + 'superteam/', {"id_hero" : id});
  }

  
  removeHero(id: Number) {
    return this.http.delete<any>(this.apiUrl + 'superteam/'+id);
  }

  getSuperteam() {
    return this.http.get<any>(this.apiUrl + 'superteam/');
  }

  checkHero(id: Number) {
    return this.http.get<any>(this.apiUrl + 'superteam/'+id);
  }

  checkSession() {
    return this.http.get<any>(this.apiUrl + 'user/session');
  }

}
