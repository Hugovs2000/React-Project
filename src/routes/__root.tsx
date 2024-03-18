import {
  createRootRoute,
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
    <div className="flex flex-col h-full">
      <Navbar className="fixed z-50 navbar bg-zinc-900 flex flex-shrink-0" />
      <div className="pt-16 flex-grow">
        <ScrollRestoration />
        <Outlet />
      </div>
      {!isFooterHidden && <Footer />}
      <TanStackRouterDevtools />
    </div>
  );
}
