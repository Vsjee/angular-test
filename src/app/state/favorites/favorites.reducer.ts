import { createReducer, on } from '@ngrx/store';
import { FavoritesState } from 'src/app/core';
import { addFavoriteItem, removeFavoriteItem } from './favorites.actions';

export const initialState: FavoritesState = { loading: false, favorites: [] };

export const favoritesReducer = createReducer(
  initialState,
  on(addFavoriteItem, (state, { favorites }) => ({
    ...state,
    favorites: [
      ...state.favorites,
      {
        id: favorites.id,
        title: favorites.title,
        image: favorites.image,
        description: favorites.description,
        ingredients: [...favorites.ingredients],
      },
    ],
  })),

  on(removeFavoriteItem, (state, { title }) => ({
    ...state,
    favorites: [...state.favorites.filter((item) => item.title !== title)],
  }))
);
