import { Action } from 'redux';

interface Movie {
  id: number;
  Title: string;
  imdbRating: string;
  Actors: string;
  Plot: string;
  Poster: string;
}

export const SET_MOVIE = 'SET_MOVIE';
export const SET_LOADING = 'SET_LOADING';

interface AddMovieAction extends Action {
  type: typeof SET_MOVIE;
  payload: any;
}

export const setMovie = (movie: Movie[]) => ({
  type: SET_MOVIE,
  payload: movie,
});

interface SetLoadingAction extends Action {
  type: typeof SET_LOADING;
  payload: any;
}

export const setLoading = (isLoading: boolean) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export type MovieActionTypes = AddMovieAction | SetLoadingAction;
