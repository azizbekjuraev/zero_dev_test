import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:8080";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/api/categories",
    }),
    getLabels: builder.query({
      query: () => "/api/labels",
    }),
    addTransaction: builder.mutation({
      query: (initialParameter) => ({
        url: "/api/transaction",
        method: "POST",
        body: initialParameter,
      }),
    }),
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: "/api/transaction/",
        method: "DELETE",
        body: recordId,
      }),
    }),
  }),
});

export default apiSlice;
