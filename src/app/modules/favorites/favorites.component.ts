import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FavoritesInfo } from 'src/app/core';
import { AppState, selectFavoriteList } from 'src/app/state';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  constructor(private store: Store<AppState>) {}

  saveFavorites$: Observable<FavoritesInfo[]> = new Observable();
  favoriteList: FavoritesInfo[] = [];

  ngOnInit() {
    this.saveFavorites$ = this.store.select(selectFavoriteList);
    this.store
      .select(selectFavoriteList)
      .subscribe((state) => (this.favoriteList = state));
  }
}
