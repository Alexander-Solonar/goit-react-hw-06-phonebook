import { configureStore } from '@reduxjs/toolkit';
import { filterReduser } from './filterSlice';

export const store = configureStore({
  reducer: {
    // contacts: [],
    filter: filterReduser,
  },
});
