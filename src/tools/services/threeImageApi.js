import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const threeImageApi = createApi({
  reducerPath: 'threeImageApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3007/api' }), 
  endpoints: (builder) => ({
    getThreeImages: builder.query({
      query: () => '/threeImage',
      providesTags: ['ThreeImage'],
    }),
    addThreeImage: builder.mutation({
      query: (newData) => ({
        url: '/threeImage',
        method: 'POST',
        body: newData,
      }),
      invalidatesTags: ['ThreeImage'],
    }),
    updateThreeImage: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/threeImage/${id}`,
        method: 'PUT',
        body: updatedData,
      }),
      invalidatesTags: ['ThreeImage'],
    }),
    deleteThreeImage: builder.mutation({
      query: (id) => ({
        url: `/threeImage/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ThreeImage'],
    }),
  }),
});

export const {
  useGetThreeImagesQuery,
  useAddThreeImageMutation,
  useUpdateThreeImageMutation,
  useDeleteThreeImageMutation,
} = threeImageApi;
