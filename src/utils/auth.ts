import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserInfo,
} from "firebase/auth";
import { auth } from "../main";
import { MouseEvent } from "react";
import { Router } from "@tanstack/react-router";
import { GoogleAuthProvider } from "firebase/auth";
import { useAuthenticationStore } from "../state/state-service";

const googleProvider = new GoogleAuthProvider();

export const logIn = (
  e: MouseEvent<HTMLButtonElement>,
  email: string,
  password: string,
  setUser: (user: UserInfo) => void,
  router: Router,
) => {
  const { lastRoute, setLastRoute } = useAuthenticationStore.getState();

  e.preventDefault();
  setPersistence(auth, browserSessionPersistence).then(() => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential?.user;
        user && setUser(user);
        lastRoute !== "/"
          ? router.navigate({ to: lastRoute })
          : router.navigate({ to: "/" });
        setLastRoute("/");
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
  setUser: (user: UserInfo) => void,
  router: Router,
) => {
  e.preventDefault();

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user && setUser(user);
      router.navigate({ to: "/" });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const logInWithGoogle = (
  setUser: (user: UserInfo) => void,
  router: Router,
) => {
  const { lastRoute, setLastRoute } = useAuthenticationStore.getState();
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      user && setUser(user);
      lastRoute !== "/"
        ? (router.navigate({ to: lastRoute }), setLastRoute("/"))
        : router.navigate({ to: "/" });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const logOut = (router: Router) => {
  const { lastRoute, setLastRoute } = useAuthenticationStore.getState();
  signOut(auth)
    .then(() => {
      lastRoute !== "/" && setLastRoute("/");
      router.navigate({ to: "/" });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const onAuthChange = (
  setUser: (user: UserInfo) => void,
  removeUser: () => void,
  storeUser?: UserInfo | null,
) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (!storeUser || storeUser?.email !== user.email) {
        setUser(user);
      }
    } else {
      if (storeUser && storeUser.email !== "") {
        removeUser();
      }
    }
  });
};

export const isAuthenticated = () => {
  const { user } = useAuthenticationStore.getState();
  return user !== null;
};
