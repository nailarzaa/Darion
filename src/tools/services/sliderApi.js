import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sliderApi = createApi({
  reducerPath: 'sliderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3007/api' }),
  endpoints: (builder) => ({
    getSliders: builder.query({
      query: () => '/slider',
    }),
    addSlider: builder.mutation({
      query: (newSlider) => ({
        url: '/slider',
        method: 'POST',
        body: newSlider,
      }),
    }),
    updateSlider: builder.mutation({
      query: ({ id, updatedSlider }) => ({
        url: `/slider/${id}`,
        method: 'PUT',
        body: updatedSlider,
      }),
    }),
    deleteSlider: builder.mutation({
      query: (id) => ({
        url: `/slider/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetSlidersQuery, useAddSliderMutation, useUpdateSliderMutation, useDeleteSliderMutation } = sliderApi;
