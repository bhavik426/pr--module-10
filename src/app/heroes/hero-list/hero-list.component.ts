import { Component } from '@angular/core';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

  constructor(private ser:HeroService)
  {

  }

  list=this.ser.data
}
