import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  { path: '', component: HeroListComponent },
  { path: 'details/:id', component: HeroDetailsComponent }
];
console.log("HEROES MODULE")

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
