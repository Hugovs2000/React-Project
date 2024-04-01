import {
  createRootRoute,
  Link,
  Outlet,
  ScrollRestoration,
  useRouterState,
} from "@tanstack/react-router";
import { IoCaretForward } from "react-icons/io5";
import Drawer from "../modules/Drawer/Drawer";
import Footer from "../modules/Footer/Footer";
import Navbar from "../modules/Navbar/Navbar";
import { useMangaStore } from "../state/state-service";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const lastReadPage = useMangaStore((state) => state.currentlyReading);
  const activeRouter = useRouterState();

  const isHidden =
    activeRouter.location.pathname.includes("details") ||
    activeRouter.location.pathname.includes("read");

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
              lastReadPage?.[0]?.length > 0 &&
              !activeRouter.location.pathname.includes("search") && (
                <Link
                  to="/read/$manga/$chapter"
                  params={{
                    manga: lastReadPage[0],
                    chapter: lastReadPage[1],
                  }}
                  className="toast toast-end bottom-auto top-[72px] z-50 m-4 rounded-lg bg-emerald-700 p-2 px-3 font-bold text-slate-50 md:top-16 md:p-4"
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
