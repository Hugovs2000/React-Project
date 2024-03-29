import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import "./index.css";
import { routeTree } from "./routeTree.gen";
import NotFoundComponent from "./shared/NotFoundComponents";

interface MangaState {
  favourites: string[];
  currentlyReading: [string, string];
  b2key: string;
  addToFavourites: (slug: string) => void;
  removeFromFavourites: (hid: string) => void;
  setLastRead: (mangaSlug: string, mangaHid: string) => void;
  setB2key: (b2key: string) => void;
}

export const useMangaStore = create<MangaState>()(
  persist(
    (set) => ({
      favourites: [] as string[],
      currentlyReading: ["", ""],
      b2key: "",
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
      setB2key: (b2key) => set(() => ({ b2key })),
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
