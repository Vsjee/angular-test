import { createAction, props } from '@ngrx/store';
import { FavoritesInfo } from 'src/app/core';

export const loadFavorites = createAction('[Favorites list] Load Favorites');

export const addFavoriteItem = createAction(
  '[Favorites list] Add favorite item success',
  props<{
    favorites: FavoritesInfo;
  }>()
);
