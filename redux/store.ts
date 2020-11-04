import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authorsSlice from './authors';
import currentAuthorSlice from './currentAuthorSlice';

const reducer = combineReducers({
  [authorsSlice.name]: authorsSlice.reducer,
  [currentAuthorSlice.name]: currentAuthorSlice.reducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof reducer>;

export default store;
