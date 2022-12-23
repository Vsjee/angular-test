import { createAction, props } from '@ngrx/store';
import { FavoritesInfo } from 'src/app/core';

export const loadFavorites = createAction('[Favorites list] Load Favorites');

export const loadedFavorites = createAction(
  '[Favorites list] Loaded success',
  props<{ favorites: FavoritesInfo[] }>
);
