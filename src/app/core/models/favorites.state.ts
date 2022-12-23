import { FavoritesInfo } from './favorites.model';

export interface FavoritesState {
  loading: boolean;
  favorites: ReadonlyArray<FavoritesInfo>;
}
