import {
  createRootRoute,
  Link,
  Outlet,
  ScrollRestoration,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { IoCaretForward } from "react-icons/io5";
import Drawer from "../modules/Drawer/Drawer";
import Footer from "../modules/Footer/Footer";
import Navbar from "../modules/Navbar/Navbar";
import { useAuthenticationStore, useMangaStore } from "../state/state-service";
import { useEffect } from "react";
import { isAuthenticated, onAuthChange } from "../utils/auth";
import { getUser } from "../firestore/firestore";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const {
    user: storeUser,
    docRef,
    setDocRef,
  } = useAuthenticationStore((state) => state);
  const lastReadPage = useMangaStore((state) => state.lastReadManga);
  const activeRouter = useRouterState();
  const router = useRouter();
  const protectedRoutes = ["favourites"].some((route) =>
    activeRouter.location.pathname.includes(route),
  );

  const isHidden = ["details", "read", "sign-up", "log-in"].some((route) =>
    activeRouter.location.pathname.includes(route),
  );

  useEffect(() => {
    onAuthChange();
    if (!storeUser && protectedRoutes) {
      router.navigate({ to: "/log-in" });
    }
    !docRef &&
      storeUser &&
      getUser(storeUser?.uid ?? "").then((docRef) => {
        docRef && setDocRef(docRef);
      });
  }, [activeRouter.location.pathname]);

  return (
    <div id="root" className="flex h-full flex-col">
      <div className="drawer h-full">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex min-h-full flex-col">
          <Navbar className="navbar fixed z-50 flex flex-shrink-0 bg-zinc-900" />
          <div className="relative flex-grow pt-16">
            <ScrollRestoration />
            <Outlet />
            {!isHidden &&
              isAuthenticated() &&
              lastReadPage?.[0]?.length > 0 &&
              !activeRouter.location.pathname.includes("search") && (
                <Link
                  to="/read/$manga/$chapter"
                  params={{
                    manga: lastReadPage[0],
                    chapter: lastReadPage[1],
                  }}
                  className="toast toast-end bottom-auto top-[72px] z-50 m-4 rounded-lg bg-emerald-700 p-2 px-3 font-bold text-slate-50 shadow-fab"
                >
                  <span className="flex items-center justify-center gap-2">
                    Continue
                    <IoCaretForward />
                  </span>
                </Link>
              )}
          </div>
          {!isHidden && <Footer padding="p-4" />}
        </div>
        <Drawer />
      </div>
    </div>
  );
}
