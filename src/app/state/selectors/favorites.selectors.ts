import { createSelector } from '@ngrx/store';
import { FavoritesState } from 'src/app/core';
import { AppState } from '../app.state';

export const selectFavoritesFeature = (state: AppState) => state.favoriteList;

export const selectFavoriteList = createSelector(
  selectFavoritesFeature,
  (state: FavoritesState) => state.favorites
);

export const selectFavoriteLoading = createSelector(
  selectFavoritesFeature,
  (state: FavoritesState) => state.loading
);
