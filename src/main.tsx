import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import "./index.css";
import MangaState from "./models/StoreState";
import { routeTree } from "./routeTree.gen";
import NotFoundComponent from "./shared/NotFoundComponents";

export const useMangaStore = create<MangaState>()(
  persist(
    (set) => ({
      favourites: [] as string[],
      currentlyReading: ["", ""],
      addToFavourites: (slug) =>
        set((state) => ({ favourites: [...state.favourites, slug] })),
      removeFromFavourites: (slug) =>
        set((state) => ({
          favourites: state.favourites.filter(
            (favouriteHid) => slug != favouriteHid
          ),
        })),
      setLastRead: (mangaSlug, mangaHid) =>
        set(() => ({ currentlyReading: [mangaSlug, mangaHid] })),
    }),
    { name: "MangaState", storage: createJSONStorage(() => localStorage) }
  )
);

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundComponent,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}
