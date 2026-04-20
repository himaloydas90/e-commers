import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ApiService = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://dummyjson.com", 
   }),
   endpoints: (build) => ({
    getProducts: build.query({
      query: () => '/products',
    }),
   }),

})
export const { useGetProductsQuery } = ApiService;