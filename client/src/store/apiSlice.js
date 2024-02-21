import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "https://zero-dev-test-server.vercel.app";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),
    getLabels: builder.query({
      query: () => "/api/labels",
      providesTags: ["transaction"],
    }),
    getTransaction: builder.query({
      query: () => "/api/transaction",
    }),
    addTransaction: builder.mutation({
      query: (initialParameter) => ({
        url: "/api/transaction",
        method: "POST",
        body: initialParameter,
      }),
      invalidatesTags: ["transaction"],
    }),
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: "/api/transaction/",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

export default apiSlice;
