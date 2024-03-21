import {
  createRootRoute,
  Link,
  Outlet,
  ScrollRestoration,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from "../modules/Footer/Footer";
import Navbar from "../modules/Navbar/Navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const activeRouter = useRouterState();

  const isFooterHidden =
    activeRouter.location.pathname.includes("details") ||
    activeRouter.location.pathname.includes("read");

  return (
    <div id="root" className="flex flex-col h-full">
      <div className="drawer h-full">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col min-h-full">
          <Navbar className="fixed z-50 navbar bg-zinc-900 flex flex-shrink-0" />
          <div className="pt-16 flex-grow">
            <ScrollRestoration />
            <Outlet />
          </div>
          {!isFooterHidden && <Footer />}
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul
            id="ham-list"
            className="p-4 w-80 min-h-full text-slate-50 bg-zinc-900">
            <div className="m-4 mt-0">
              Chronical <span className="text-emerald-600">Frames</span>
            </div>
            <Link to="/">
              <li>Home</li>
            </Link>
          </ul>
        </div>
      </div>

      <TanStackRouterDevtools />
    </div>
  );
}
