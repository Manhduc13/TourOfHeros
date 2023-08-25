import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from 'src/app/hero';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb(){
    const heroes=[
      {id:1, hero_name:'Captain America', real_name:'Steve Roger',weapon:'Vibranium Shield'},
      {id:2, hero_name:'Iron Man', real_name:'Tony Stark', weapon:'Iron suit'},
      {id:3, hero_name:'Thor', real_name:'Thor',weapon:'Storm Breaker'},
      {id:4, hero_name:'Hulk',real_name:'Bruce Banner',weapon:'Super power'},
      {id:5, hero_name:'Hawk Eye', real_name:'Clint Barton', weapon:'Arrow'},
      {id:6, hero_name:'Black Widow', real_name:'Natasha Romanoff', weapon:'Guns'}
    ]
    return {heroes};
  }

  genId(heroes: Hero[]):number {
    return heroes.length>0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11; 
  }

  constructor() { }
}
