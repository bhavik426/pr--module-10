import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisComponent } from './crisis/crisis.component';
import { DataComponent } from './crisis/data/data.component';

const routes: Routes = [
  {
    path: '', component: CrisisComponent, children: [
      { path: 'data/:id', component: DataComponent }
    ]
  }
];
console.log("CRISIS MODULE")

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
