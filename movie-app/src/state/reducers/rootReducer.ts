import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  // Add other reducers if needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
