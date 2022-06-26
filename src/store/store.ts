import { configureStore } from '@reduxjs/toolkit';
import PickReducer from './reducers/PickReducer';

const store = configureStore({
  reducer: {
    pick: PickReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
