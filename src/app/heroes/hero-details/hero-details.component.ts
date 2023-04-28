import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from '../service/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  specdata!: Hero
  newdata!: string
  constructor(private ser: HeroService, private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.params.subscribe((params: any) => {
      let res = this.ser.data.find(x => x.id == params.id)
      if (res != null) {
        this.specdata = res
        this.newdata = this.specdata.name
      }
    })
  }
  call() {
    this.ser.update(this.specdata, this.newdata)
  }
}
