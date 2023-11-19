import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api' }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (pathname) => `https://swapi.dev/api/${pathname}`,
    }),
    getDataDetails: builder.query({
      query: (pathname) => `https://swapi.dev/api/${pathname}`,
    }),
  }),
});

export const { useGetDataQuery, useGetDataDetailsQuery } = apiSlice;
