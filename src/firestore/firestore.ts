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
import UserState from "../models/UserState";
import MangaState from "../models/MangaState";

export const addUser = async (user: FirestoreUser): Promise<string> => {
  const docRef = await addDoc(collection(firestore, "users"), {
    uid: user.uid,
    email: user.email,
    favourites: user.favourites,
    lastReadManga: user.lastReadManga,
    currentlyReading: user.currentlyReading,
  });
  if (docRef) {
    return docRef.id;
  } else {
    return "";
  }
};

export const updateUser = async (
  user: UserState,
  mangaState: MangaState,
): Promise<void> => {
  await updateDoc(doc(firestore, "users", user.docRef ?? ""), {
    uid: user.uid,
    email: user.email,
    favourites: mangaState.favourites,
    lastReadManga: mangaState.lastReadManga,
    currentlyReading: mangaState.currentlyReading,
  });
};

export const getUser = async (uid: string): Promise<string> => {
  const q = query(collection(firestore, "users"), where("uid", "==", uid));

  const querySnapshot = await getDocs(q);
  return querySnapshot?.docs?.[0]?.id ?? "";
};
