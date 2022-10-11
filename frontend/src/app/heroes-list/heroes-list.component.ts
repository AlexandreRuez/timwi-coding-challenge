import { Component, OnInit } from '@angular/core';
import { MarvelApiserviceService } from 'src/app/core/services/marvelapiservice.service';
import { ApiserviceService } from '../core/services/apiservice.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  constructor(private service: ApiserviceService, private marvelService: MarvelApiserviceService) { }

  heroesList: any = [];
  page: number = 1;
  name = "";
  stories = "";
  nameSearch = "";
  storiesSearch = "";
  userConnected: boolean = false;

  ngOnInit(): void {
    this.checkSession();
    this.refreshHeroesList();
  }

  refreshHeroesList() {
    this.marvelService.getHeroesList(this.page, this.nameSearch, this.storiesSearch).subscribe(data => {
      this.heroesList = this.heroesList.concat(...data.data.results);
    });
  }

  onScrollDown() {
    this.page++;
    this.refreshHeroesList();
  }

  onScrollUp() {
    console.log("scrolled up!!");
  }

  search() {
    console.log(this.name)
    this.nameSearch = this.name;
    this.storiesSearch = this.stories;
    this.heroesList = [];
    this.page = 1;
    this.refreshHeroesList();
  }

  checkSession() {
    this.service.checkSession().subscribe(data => {
      console.log("session",data);
      this.userConnected = data.session;
    });
  }

}
