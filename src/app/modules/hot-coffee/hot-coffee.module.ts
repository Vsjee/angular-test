import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotCoffeeRoutingModule } from './home-routing.module';
import { CoffeeCardComponent } from 'src/app/components';
import { HotCoffeeComponent } from './hot-coffee.component';

@NgModule({
  declarations: [HotCoffeeComponent],
  imports: [CommonModule, HotCoffeeRoutingModule, CoffeeCardComponent],
})
export class HotCoffeeModule {}
