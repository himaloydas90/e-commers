import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ApiService = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://dummyjson.com", 
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token"); // LocalStorage theke token nibe
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
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
    searchProduct: build.query({
      query:(search)=>`/product/search?q=${search}`,

    }),
    Login:build.mutation({
      query:(data)=>({
        url: `/auth/login`,
        method:"POST",
        body:data,
      })
    }),
    getProfile: build.query({
      query: (id) => ({
        url:`/auth/me`,
      }),
    }),
   }),
})
export const { 
  useGetProductsQuery,
  useGetCategoryListQuery,
  useGetProductDetailsQuery,
  useLoginMutation,
  useGetProfileQuery,
  useLazySearchProductQuery
} = ApiService; 