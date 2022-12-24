import { ActionReducerMap } from '@ngrx/store';
import { FavoritesState } from '../core';
import { favoritesReducer } from './favorites/favorites.reducer';

export interface AppState {
  favoriteList: FavoritesState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  favoriteList: favoritesReducer,
};
