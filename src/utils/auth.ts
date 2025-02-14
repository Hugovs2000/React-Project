import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../main";
import { MouseEvent } from "react";
import { Router } from "@tanstack/react-router";
import { GoogleAuthProvider } from "firebase/auth";
import { useAuthenticationStore, useMangaStore } from "../state/state-service";
import { addUser, getUser } from "../firestore/firestore";

const googleProvider = new GoogleAuthProvider();

export const logIn = (
  e: MouseEvent<HTMLButtonElement>,
  email: string,
  password: string,
  router: Router,
) => {
  const { lastRoute, setLastRoute, setDocRef, setUser } =
    useAuthenticationStore.getState();

  e.preventDefault();
  setPersistence(auth, browserSessionPersistence).then(() => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          const user = userCredential?.user;
          getUser(user.uid).then((docRef) => {
            if (!docRef) {
              addUser({
                uid: user.uid,
                email: user.email ?? "",
                favourites: [],
                lastReadManga: ["", ""],
                currentlyReading: [],
              }).then((docRef) => {
                if (docRef) {
                  setUser(user);
                  setDocRef(docRef);
                  lastRoute !== "/"
                    ? (router.navigate({ to: lastRoute }), setLastRoute("/"))
                    : router.navigate({ to: "/" });
                }
              });
            }
            setUser(user);
            setDocRef(docRef ?? "");
            lastRoute !== "/"
              ? (router.navigate({ to: lastRoute }), setLastRoute("/"))
              : router.navigate({ to: "/" });
          });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });
};

export const signUp = async (
  e: MouseEvent<HTMLButtonElement>,
  email: string,
  password: string,
  router: Router,
) => {
  const { lastRoute, setLastRoute, setDocRef, setUser } =
    useAuthenticationStore.getState();
  e.preventDefault();

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        setUser(user);
        addUser({
          uid: user.uid,
          email: user.email ?? "",
          favourites: [],
          lastReadManga: ["", ""],
          currentlyReading: [],
        }).then((docRef) => {
          if (docRef) {
            setUser(user);
            setDocRef(docRef);
            lastRoute !== "/"
              ? (router.navigate({ to: lastRoute }), setLastRoute("/"))
              : router.navigate({ to: "/" });
          }
        });
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const logInWithGoogle = (router: Router) => {
  const { lastRoute, setLastRoute, setDocRef, setUser } =
    useAuthenticationStore.getState();
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      if (!user) return;
      getUser(user.uid).then((docRef) => {
        if (!docRef) {
          addUser({
            uid: user.uid,
            email: user.email ?? "",
            favourites: [],
            lastReadManga: ["", ""],
            currentlyReading: [],
          }).then((docRef) => {
            if (docRef) {
              setUser(user);
              setDocRef(docRef);
              lastRoute !== "/"
                ? (router.navigate({ to: lastRoute }), setLastRoute("/"))
                : router.navigate({ to: "/" });
            }
          });
        }
        setUser(user);
        setDocRef(docRef ?? "");
        lastRoute !== "/"
          ? (router.navigate({ to: lastRoute }), setLastRoute("/"))
          : router.navigate({ to: "/" });
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const logOut = (router: Router) => {
  const { lastRoute, setLastRoute, setDocRef, removeUser } =
    useAuthenticationStore.getState();
  const { clearStore } = useMangaStore.getState();
  signOut(auth)
    .then(() => {
      setDocRef("");
      removeUser();
      clearStore();
      lastRoute !== "/" && setLastRoute("/");
      router.navigate({ to: "/" });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const onAuthChange = () => {
  const {
    setDocRef,
    setUser,
    removeUser,
    user: storeUser,
  } = useAuthenticationStore.getState();
  const { clearStore } = useMangaStore.getState();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (!storeUser || storeUser?.email !== user.email) {
        getUser(user.uid ?? "").then((docRef) => {
          if (docRef) {
            setDocRef(docRef);
            setUser(user);
          }
        });
      }
    } else {
      if (storeUser && storeUser.email !== "") {
        removeUser();
        clearStore();
      }
    }
  });
};

export const isAuthenticated = () => {
  const { user } = useAuthenticationStore.getState();
  return user !== null;
};
