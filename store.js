import { configureStore } from "@reduxjs/toolkit";
import { jsonPlaceHolderApi } from "./services/jsonPlaceholderApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [jsonPlaceHolderApi.reducerPath]: jsonPlaceHolderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceHolderApi.middleware),
});

setupListeners(store.dispatch);
