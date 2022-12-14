import { Component } from '@angular/core';
import { CoffeeInfo } from 'src/app/models';
import { GetCoffeeService } from 'src/app/services';

@Component({
  selector: 'app-iced-coffee',
  templateUrl: './iced-coffee.component.html',
  styleUrls: ['./iced-coffee.component.scss'],
})
export class IcedCoffeeComponent {
  coffeeData: CoffeeInfo[] = [];

  constructor(private data: GetCoffeeService) {}

  ngOnInit() {
    return this.data.getCoffees('iced').subscribe((data: any) => {
      this.coffeeData = data;
      console.log(data);
    });
  }
}
