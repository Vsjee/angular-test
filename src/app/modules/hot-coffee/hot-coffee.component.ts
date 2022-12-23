import { Component } from '@angular/core';
import { GetCoffeeService } from 'src/app/services';
import { CoffeeInfo } from 'src/app/models';

@Component({
  selector: 'app-hot-coffee',
  templateUrl: './hot-coffee.component.html',
  styleUrls: ['./hot-coffee.component.scss'],
})
export class HotCoffeeComponent {
  coffeeData: CoffeeInfo[] = [];
  endpoint: string = 'hot';

  constructor(private data: GetCoffeeService) {}

  ngOnInit() {
    return this.data.getCoffees(this.endpoint).subscribe((data: any) => {
      this.coffeeData = data;
      console.log(data);
    });
  }
}
