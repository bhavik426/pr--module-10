import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor() { }

  data=[
    {id:1,title:'Dragon Burning Cities'},
    {id:2,title:'Sky Rains Great White Sharks'},
    {id:3,title:'Giant Asteroid Heading For Earth'},
    {id:4,title:'Procastinators Meeting Delayed Agian'}
  ]

  adddata(text:Listdata)
  {
     this.data.find(d => d.id === text.id)!.title=text.title
    console.log(text)
  }

}
export interface Listdata{
  id:number,
  title:string
}
