import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import MangaState from "../models/StoreState";

export const useMangaStore = create<MangaState>()(
  persist(
    (set) => ({
      favourites: [] as string[],
      currentlyReading: [],
      lastReadManga: ["", ""],
      addToFavourites: (slug) =>
        set((state) => ({ favourites: [...state.favourites, slug] })),
      removeFromFavourites: (slug) =>
        set((state) => ({
          favourites: state.favourites.filter(
            (favouriteHid) => slug != favouriteHid,
          ),
        })),
      setLastRead: (mangaSlug, mangaHid) =>
        set(() => ({ lastReadManga: [mangaSlug, mangaHid] })),
      addCurrentlyReading: (mangaSlug, mangaHid, mangaTitle) =>
      set((state) => {
        const existingIndex = state.currentlyReading.findIndex(
          ([existingMangaSlug]) => existingMangaSlug === mangaSlug
        );
        if (existingIndex !== -1) {
          const updatedCurrentlyReading = [...state.currentlyReading];
          updatedCurrentlyReading[existingIndex] = [mangaSlug, mangaHid, mangaTitle];
          return { currentlyReading: updatedCurrentlyReading };
        }
        return {
          currentlyReading: [...state.currentlyReading, [mangaSlug, mangaHid, mangaTitle]],
        };
      }),
    }),
    { name: "MangaState", storage: createJSONStorage(() => localStorage) },
  ),
);
