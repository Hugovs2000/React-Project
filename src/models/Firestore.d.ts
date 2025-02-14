export interface FirestoreUser {
  uid: string;
  email: string;
  favourites: string[];
  lastReadManga: [string, string];
  currentlyReading: [string, string, string][];
}
