import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/constants";
import { buildUrl } from "../utils/common";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => buildUrl(params),
      providesTags: ["Products"],
    }),
    // getProduct: builder.query({
    //   query: ({ id }) => `/products/${id}`,
    //   providesTags: ["Product"],
    // }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
