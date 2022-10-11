import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/core/services/apiservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() hero = {
    id: 0,
    name : "",
    description: "",
    thumbnail: {
      path:"",
      extension: ""
    }
  };
  @Input() userConnected: boolean = false;

  inSuperteam: boolean = false;


  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
    console.log(this.hero);

    console.log(this.userConnected);
    if (this.userConnected){
     this.isInSuperteam();
    }
  }

  isInSuperteam (){
    this.service.checkHero(this.hero.id).subscribe(data => {
      data.inSuperteam ? this.inSuperteam = true : this.inSuperteam = false;
    });
  }

  addHero(id: Number) {
    this.service.addHero(id).subscribe(data => {
      this.isInSuperteam();
    });
  }

  removeHero(id: Number) {
    this.service.removeHero(id).subscribe(data => {
      this.isInSuperteam();
    });
  }

}
