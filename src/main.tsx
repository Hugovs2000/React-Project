import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom/client";
import { firebaseConfig } from "./firebase/firebase";
import "./index.css";
import { routeTree } from "./routeTree.gen";
import NotFoundComponent from "./shared/NotFoundComponents";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundComponent,
});

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const queryClient = new QueryClient();

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>,
  );
}
