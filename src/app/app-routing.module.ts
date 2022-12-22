import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards';
import { privateRoutes, publicRoutes } from './models';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: `${publicRoutes.HOME}`,
    loadChildren: () => import('./modules').then((m) => m.HomeModule),
  },
  {
    path: `${publicRoutes.HOTCOFFEE}`,
    loadChildren: () => import('./modules').then((m) => m.HotCoffeeModule),
  },
  {
    path: `${publicRoutes.ICEDCOFFEE}`,
    loadChildren: () => import('./modules').then((m) => m.IcedCoffeeModule),
  },
  {
    path: `${publicRoutes.LOGIN}`,
    loadChildren: () => import('./modules').then((m) => m.LoginModule),
  },
  {
    path: `${privateRoutes.FAVORITES}`,
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
