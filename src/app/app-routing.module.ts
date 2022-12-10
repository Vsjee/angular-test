import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
