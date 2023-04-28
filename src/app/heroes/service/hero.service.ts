import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  data=[
    {id:11,name:'Dr Nice'},
    {id:12,name:'Narco'},
    {id:13,name:'Bombasto'},
    {id:14,name:'Celeratis'},
    {id:15,name:'Magenta'},
    {id:16,name:'RubberMan'},
    {id:17,name:'Dynama'},
    {id:18,name:'Dr IQ'},
    {id:19,name:'Magma'},
    {id:20,name:'Tornado'},
  ]

  update(newdata: Hero,str:string){
    this.data.find(x=>x.id==newdata.id)!.name=str
  }
}

export interface Hero{
  id:number,
  name:string
}