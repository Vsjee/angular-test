import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CoffeeInfo, initializeCoffeeInfo } from 'src/app/models';
import { Store } from '@ngrx/store';
import {
  addFavoriteItem,
  removeFavoriteItem,
} from 'src/app/state/favorites/favorites.actions';
import { FavoritesInfo } from 'src/app/core';
import { AppState, selectFavoriteList } from 'src/app/state';
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

  toggleIcon: boolean = false;

  itemTitle: string = '';

  constructor(private store: Store<AppState>, private router: Router) {}

  addAndRemoveItem() {
    if (this.router.url !== '/favorites') {
      this.findItem();
      if (this.itemTitle !== this.info.title) {
        this.store.dispatch(addFavoriteItem({ favorites: this.info }));
      }
    } else {
      this.store.dispatch(removeFavoriteItem({ title: this.info.title }));
    }
  }

  findItem() {
    this.store
      .select(selectFavoriteList)
      .subscribe((listItems: FavoritesInfo[]) => {
        listItems.find((item: FavoritesInfo) => {
          return item.title !== this.info.title
            ? (this.itemTitle = '')
            : (this.itemTitle = this.info.title);
        });
      });
  }

  ngOnInit(): boolean {
    return this.router.url !== '/favorites' ? false : (this.toggleIcon = true);
  }
}
