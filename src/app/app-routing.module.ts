import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./modules').then((m) => m.HomeModule),
  },
  {
    path: 'hotCoffee',
    loadChildren: () => import('./modules').then((m) => m.HotCoffeeModule),
  },
  {
    path: 'icedCoffee',
    loadChildren: () => import('./modules').then((m) => m.IcedCoffeeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./modules').then((m) => m.LoginModule),
  },
  {
    path: 'favorites',
    loadChildren: () => import('./modules').then((m) => m.FavoritesModule),
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
