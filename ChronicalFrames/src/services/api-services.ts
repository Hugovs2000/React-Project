import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mangaApi = createApi({
  reducerPath: "mangaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.comick.io/" }),
  endpoints: (builder) => ({
    getTopTrending: builder.query({
      query: () => "top?accept_mature_content=false",
    }),
    getAllCatagories: builder.query({
      query: () => `category?Limit=10`,
    }),
  }),
});

export const { useGetAllCatagoriesQuery, useGetTopTrendingQuery } = mangaApi;
