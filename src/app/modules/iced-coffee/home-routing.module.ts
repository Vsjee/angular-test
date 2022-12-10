import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IcedCoffeeComponent } from './iced-coffee.component';

const routes: Routes = [{ path: '', component: IcedCoffeeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcedCoffeeRoutingModule {}
