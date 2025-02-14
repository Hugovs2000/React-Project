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
  const q = query(collection(firestore, "users"), where("uid", "==", uid));

  const querySnapshot = await getDocs(q);
  return querySnapshot?.docs?.[0]?.id ?? "";
};
