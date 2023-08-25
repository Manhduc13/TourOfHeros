import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/HeroService/hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  heroes: Hero[];
  constructor(private heroService: HeroService) { 
    this.heroes = [];
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0,4));
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
