import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CoffeeInfo, initializeCoffeeInfo } from 'src/app/models';
import { Store } from '@ngrx/store';
import {
  addFavoriteItem,
  removeFavoriteItem,
} from 'src/app/state/favorites/favorites.actions';
import { GetCoffeeService } from 'src/app/services';
import { FavoritesInfo } from 'src/app/core';
import { AppState } from 'src/app/state';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss'],
})
export class CoffeeCardComponent {
  @Input() info: CoffeeInfo = initializeCoffeeInfo;
  @Input() endpoint: string = '';

  constructor(
    private store: Store<AppState>,
    private http: GetCoffeeService,
    private router: Router
  ) {}

  dispatchSomething() {
    if (this.router.url !== '/favorites') {
      this.http.getCoffees(this.endpoint).subscribe((item: any) => {
        item.filter((item: FavoritesInfo) => {
          if (item.id === this.info.id) {
            this.store.dispatch(addFavoriteItem({ favorites: item }));
          }
        });
      });
    } else {
      this.store.dispatch(removeFavoriteItem({ title: this.info.title }));
    }
  }
}
