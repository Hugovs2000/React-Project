import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import MangaState from "../models/MangaState";
import UserState from "../models/UserState";

export const useMangaStore = create<MangaState>()(
  persist(
    (set) => ({
      favourites: [] as string[],
      currentlyReading: [],
      lastReadManga: ["", ""],
      addToFavourites: (slug) =>
        set((state) =>
          !state.favourites.includes(slug)
            ? {
                favourites: [...state.favourites, slug],
              }
            : { favourites: [...state.favourites] },
        ),
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
            ([existingMangaSlug]) => existingMangaSlug === mangaSlug,
          );
          if (existingIndex !== -1) {
            const updatedCurrentlyReading = [...state.currentlyReading];
            updatedCurrentlyReading[existingIndex] = [
              mangaSlug,
              mangaHid,
              mangaTitle,
            ];
            return { currentlyReading: updatedCurrentlyReading };
          }
          return {
            currentlyReading: [
              ...state.currentlyReading,
              [mangaSlug, mangaHid, mangaTitle],
            ],
          };
        }),
      clearStore: () =>
        set(() => {
          return {
            favourites: [],
            currentlyReading: [],
            lastReadManga: ["", ""],
          };
        }),
    }),
    { name: "MangaState", storage: createJSONStorage(() => localStorage) },
  ),
);

export const useAuthenticationStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      uid: "",
      email: "",
      lastRoute: "",
      docRef: "",
      setLastRoute: (route) => set(() => ({ lastRoute: route })),
      setUser: (user) =>
        set(() => ({ user, uid: user.uid, email: user.email ?? "" })),
      setDocRef: (docRef) => set(() => ({ docRef })),
      removeUser: () => set(() => ({ user: null, uid: "", email: "" })),
    }),
    { name: "UserState", storage: createJSONStorage(() => localStorage) },
  ),
);
