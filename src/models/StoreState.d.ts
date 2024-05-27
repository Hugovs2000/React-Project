export default interface MangaState {
  favourites: string[];
  lastReadManga: [string, string];
  currentlyReading: [string, string][];
  addToFavourites: (slug: string) => void;
  removeFromFavourites: (hid: string) => void;
  setLastRead: (mangaSlug: string, mangaHid: string) => void;
  addCurrentlyReading: (mangaSlug: string, mangaHid: string) => void;
}
