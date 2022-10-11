import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import {Md5} from 'ts-md5';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiserviceService {
 readonly apiUrl = environment.marvelApiUrl;
 readonly apikey = environment.marvelPublicKey;
 readonly privatekey = environment.marvelPrivateKey;

  constructor(private http: HttpClient) { }

  // Department
  getHeroesList(page: number, name:string, stories: string): Observable<any> {
    var limit = 20;
    var offset = limit*page;
    var timestamp = Date.now();
    var credentials = '&ts='+timestamp+'&apikey='+this.apikey+'&hash='+ Md5.hashStr(timestamp+this.privatekey+this.apikey)
    var search = ""
    console.log(name);
    if (name!="") {
      search += "&nameStartsWith=" + name;
    }
    if (stories!="") {
      search += "&stories=" + stories;
    }

    return this.http.get<any>(this.apiUrl + 'characters?limit='+limit+'&offset='+offset+search+credentials);
  }

  getHero(id: string): Observable<any> {
    var timestamp = Date.now();
    var credentials = 'ts='+timestamp+'&apikey='+this.apikey+'&hash='+ Md5.hashStr(timestamp+this.privatekey+this.apikey)

    return this.http.get<any>(this.apiUrl + 'characters/'+id+'?'+credentials);
  }

}