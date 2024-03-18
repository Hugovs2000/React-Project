import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from "../modules/Footer/Footer";
import Navbar from "../modules/Navbar/Navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex flex-col h-full">
      <Navbar className="fixed z-50 navbar bg-zinc-900 flex flex-shrink-0" />
      <div className="pt-16 flex-grow">
        <Outlet />
      </div>
      <Footer />
      <TanStackRouterDevtools />
    </div>
  );
}
