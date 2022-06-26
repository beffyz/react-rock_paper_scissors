import { configureStore } from '@reduxjs/toolkit';
import ScoreboardReducer from './reducers/ScoreboardReducer';

const store = configureStore({
  reducer: {
    pick: ScoreboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
