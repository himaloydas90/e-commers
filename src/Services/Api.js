import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ApiService = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://dummyjson.com", 
   }),
   endpoints: (build) => ({
    getProducts: build.query({
      query: ({ category, limit, skip }) =>
         `/products${category ? `/category/${category}` : ""}?limit=${limit}&skip=${skip}`, 
    }),
    getCategoryList: build.query({
      query: () => "/products/category-list",
    }),
    getProductDetails: build.query({
      query: (id) => `/products/${id}`,
    }),
   }),

})
export const { useGetProductsQuery, useGetCategoryListQuery, useGetProductDetailsQuery } = ApiService; 