import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IcedCoffeeRoutingModule } from './home-routing.module';
import { CoffeeCardComponent } from 'src/app/components';
import { IcedCoffeeComponent } from './iced-coffee.component';

@NgModule({
  declarations: [IcedCoffeeComponent],
  imports: [CommonModule, IcedCoffeeRoutingModule, CoffeeCardComponent],
})
export class IcedCoffeeModule {}
