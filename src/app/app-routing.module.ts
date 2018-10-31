import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import { HeroeDetailsComponent }  from './heroe-details/heroe-details.component';

const routes: Routes = [

  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'detail/:id',component: HeroeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
