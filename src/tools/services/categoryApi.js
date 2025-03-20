import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3007/api' }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/category',
    }),
    addCategory: builder.mutation({
      query: (category) => ({
        url: '/category',
        method: 'POST',
        body: category,
      }),
    }),
    updateCategory: builder.mutation({
      query: ({ id, category }) => ({
        url: `/category/${id}`,
        method: 'PUT',
        body: category,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
