import { createReducer, on } from '@ngrx/store';
import { FavoritesState } from 'src/app/core';
import { loadFavorites } from '../actions/favorites.actions';

export const initialState: FavoritesState = { loading: false, favorites: [] };

export const favoritesReducer = createReducer(
  initialState,
  on(loadFavorites, (state) => {
    return { ...state, loading: true };
  })
);
