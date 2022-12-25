import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FavoritesInfo } from 'src/app/core';
import { AppState, selectFavoriteList } from 'src/app/state';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  constructor(private store: Store<AppState>) {}

  favoriteList: FavoritesInfo[] = [];

  ngOnInit() {
    this.store
      .select(selectFavoriteList)
      .subscribe((state: FavoritesInfo[]) => (this.favoriteList = state));
  }
}
