import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const subcategoryApi = createApi({
  reducerPath: 'subcategoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3007/api' }),
  endpoints: (builder) => ({
    getSubCategories: builder.query({
      query: () => '/subcategory',
    }),
    addSubCategory: builder.mutation({
      query: (subcategory) => ({
        url: '/subcategory',
        method: 'POST',
        body: subcategory,
      }),
    }),
    updateSubCategory: builder.mutation({
      query: ({ id, subcategory }) => ({
        url: `/subcategory/${id}`,
        method: 'PUT',
        body: subcategory,
      }),
    }),
    deleteSubCategory: builder.mutation({
      query: (id) => ({
        url: `/subcategory/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {useGetSubCategoriesQuery,useAddSubCategoryMutation,useUpdateSubCategoryMutation,useDeleteSubCategoryMutation,} = subcategoryApi;
