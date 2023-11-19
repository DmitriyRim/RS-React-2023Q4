import { configureStore } from '@reduxjs/toolkit';
import searchReduce from '../components/Search/searchSlice';
import { apiSlice } from '../api/apiSlice';

export const store = configureStore({
  reducer: {
    search: searchReduce,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
