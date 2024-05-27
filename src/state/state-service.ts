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
      addCurrentlyReading: (mangaSlug, mangaHid) =>
      set((state) => {
        // Check if mangaSlug already exists in currentlyReading
        const existingIndex = state.currentlyReading.findIndex(
          ([existingMangaSlug]) => existingMangaSlug === mangaSlug
        );
        if (existingIndex !== -1) {
          // If mangaSlug exists, update the corresponding mangaHid
          const updatedCurrentlyReading = [...state.currentlyReading];
          updatedCurrentlyReading[existingIndex] = [mangaSlug, mangaHid];
          return { currentlyReading: updatedCurrentlyReading };
        }
        // If mangaSlug does not exist, add the new [mangaSlug, mangaHid] pair
        return {
          currentlyReading: [...state.currentlyReading, [mangaSlug, mangaHid]],
        };
      }),
    }),
    { name: "MangaState", storage: createJSONStorage(() => localStorage) },
  ),
);
