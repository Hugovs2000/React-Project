import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { mangaApi } from "./api-services";

export const store = configureStore({
  reducer: {
    [mangaApi.reducerPath]: mangaApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mangaApi.middleware),
});

setupListeners(store.dispatch);
