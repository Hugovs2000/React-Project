import {
  createRootRoute,
  Link,
  Outlet,
  ScrollRestoration,
  useRouterState,
} from "@tanstack/react-router";
import { IoCaretForward } from "react-icons/io5";
import { useMangaStore } from "../main";
import Drawer from "../modules/Drawer/Drawer";
import Footer from "../modules/Footer/Footer";
import Navbar from "../modules/Navbar/Navbar";

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
    <div id="root" className="flex flex-col h-full">
      <div className="drawer h-full">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col min-h-full">
          <Navbar className="fixed z-50 navbar bg-zinc-900 flex flex-shrink-0" />
          <div className="pt-16 flex-grow relative">
            <ScrollRestoration />
            <Outlet />
            {!isHidden &&
              lastReadPage?.[0].length > 0 &&
              !activeRouter.location.pathname.includes("search") && (
                <Link
                  to="/read/$manga/$chapter"
                  params={{
                    manga: lastReadPage[0],
                    chapter: lastReadPage[1],
                  }}
                  className="p-2 px-3 md:p-4 bg-emerald-700 text-slate-50 m-4 toast toast-end top-[72px] md:top-16 bottom-auto z-50 rounded-lg font-bold">
                  <span className="flex gap-2 justify-center items-center">
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
