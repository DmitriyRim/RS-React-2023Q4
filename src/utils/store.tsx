import { configureStore } from '@reduxjs/toolkit';
import searchReduce from '../components/Search/searchSlice';

export const store = configureStore({
  reducer: {
    search: searchReduce,
  },
});
