import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/core/services/apiservice.service';
import { MarvelApiserviceService } from 'src/app/core/services/marvelapiservice.service';

@Component({
  selector: 'app-superteam',
  templateUrl: './superteam.component.html',
  styleUrls: ['./superteam.component.scss']
})
export class SuperteamComponent implements OnInit {

  superteam: Array<any> = [];

  constructor(private service: ApiserviceService, private marvelService: MarvelApiserviceService) { }

  ngOnInit(): void {
    this.getSuperteam();
    console.log(this.superteam);
  }

  getSuperteam() {
    this.service.getSuperteam().subscribe(data => {
      console.log(data);
      data.superteam.forEach((element: { id_hero: string; }) => {
        this.marvelService.getHero(element.id_hero).subscribe(data => {
          this.superteam.push(data.data.results[0]);
        });
      });
    });
  }

}
