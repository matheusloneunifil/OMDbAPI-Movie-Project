import { Reducer } from 'redux';
import { SET_MOVIE, MovieActionTypes, SET_LOADING } from '../actions/movieActions';

interface MovieState {
  movieList: Array<{ id: number }>; // Define your movie state interface
  isLoading: boolean
}

const initialState: MovieState = {
  movieList: [],
  isLoading: false,
};

const movieReducer: Reducer<MovieState, MovieActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return {
        ...state,
        movieList: [...action.payload],
      };
    case SET_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
    default:
      return state;
  }
};

export default movieReducer;
