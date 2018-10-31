import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../Hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';
@Component({
  selector: 'app-heroe-details',
  templateUrl: './heroe-details.component.html',
  styleUrls: ['./heroe-details.component.css']
})
export class HeroeDetailsComponent implements OnInit {
@Input() hero:Hero;
constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
) {}
  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }

}
