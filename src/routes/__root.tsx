import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="flex flex-col h-full">
      <Navbar className="fixed z-[999] navbar bg-zinc-900 flex flex-shrink-0" />
      <div className="pt-16 flex-grow">
        <Outlet />
      </div>
      <Footer />
      <TanStackRouterDevtools />
    </div>
  );
}
