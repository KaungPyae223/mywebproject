import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  tagTypes:['Movie'],
  endpoints: (builder) => ({
  }),
});

