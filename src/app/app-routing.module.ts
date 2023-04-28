import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin/admin.guard';

const routes: Routes = [
  {path:'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),canActivate:[AdminGuard]},
  {path:'crisis', loadChildren:()=>import('./crisis/crisis.module').then(m=>m.CrisisModule)},
  {path:'heroes', loadChildren:()=>import('./heroes/heroes.module').then(m=>m.HeroesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
