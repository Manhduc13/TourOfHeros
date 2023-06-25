import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[]=[];
  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  constructor(private heroService: HeroService,
              private messageService: MessageService) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}