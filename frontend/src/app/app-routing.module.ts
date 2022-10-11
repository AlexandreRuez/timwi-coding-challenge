import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { SuperteamComponent } from './superteam/superteam/superteam.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesListComponent },
  { path: 'superteam', component: SuperteamComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
