import { configureStore } from '@reduxjs/toolkit';
import { sliderApi } from './services/sliderApi';
import { threeImageApi } from './services/threeImageApi';
import { categoryApi } from './services/categoryApi';
import { subcategoryApi } from './services/subcategoryApi';
import { productApi } from './services/productApi';

export const store = configureStore({
  reducer: {
    [sliderApi.reducerPath]: sliderApi.reducer,
    [threeImageApi.reducerPath]:threeImageApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [subcategoryApi.reducerPath]: subcategoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sliderApi.middleware, threeImageApi.middleware, categoryApi.middleware, subcategoryApi.middleware, productApi.middleware)

});

export default store;
