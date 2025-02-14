import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../main";
import { FirestoreUser } from "../models/Firestore";
import { useAuthenticationStore, useMangaStore } from "../state/state-service";

export const addUser = async (user: FirestoreUser): Promise<string> => {
  const docRef = await addDoc(collection(firestore, "users"), {
    uid: user.uid,
    email: user.email,
    favourites: JSON.stringify(user.favourites),
    lastReadManga: JSON.stringify(user.lastReadManga),
    currentlyReading: JSON.stringify(user.currentlyReading),
  });
  if (docRef) {
    return docRef.id;
  } else {
    return "";
  }
};

export const updateUser = async (): Promise<void> => {
  const { user, docRef } = useAuthenticationStore.getState();
  const mangaStore = useMangaStore.getState();
  await updateDoc(doc(firestore, "users", docRef ?? ""), {
    uid: user?.uid,
    email: user?.email,
    favourites: JSON.stringify(mangaStore?.favourites ?? {}),
    lastReadManga: JSON.stringify(mangaStore?.lastReadManga ?? ["", ""]),
    currentlyReading: JSON.stringify(
      mangaStore?.currentlyReading ?? [["", "", ""]],
    ),
  });
};

export const getUser = async (uid: string): Promise<string> => {
  const { setLastRead, addCurrentlyReading, addToFavourites } =
    useMangaStore.getState();

  const q = query(collection(firestore, "users"), where("uid", "==", uid));

  const querySnapshot = await getDocs(q);

  const lastReadManga: [string, string] = JSON.parse(
    querySnapshot?.docs?.[0]?.get("lastReadManga") ?? "[]",
  );
  const currentlyReading: [string, string, string][] = JSON.parse(
    querySnapshot?.docs?.[0]?.get("currentlyReading") ?? "[]",
  );
  const favourites: string[] = JSON.parse(
    querySnapshot?.docs?.[0]?.get("favourites") ?? "[]",
  );

  setLastRead(lastReadManga?.[0], lastReadManga?.[1]);
  currentlyReading.map((manga) => {
    addCurrentlyReading(manga?.[0], manga?.[1], manga?.[2]);
  });

  favourites?.map((fav) => {
    addToFavourites(fav);
  });

  return querySnapshot?.docs?.[0]?.id ?? "";
};
