import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotCoffeeComponent } from './hot-coffee.component';

const routes: Routes = [{ path: '', component: HotCoffeeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotCoffeeRoutingModule {}
