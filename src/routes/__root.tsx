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
      <Navbar className="flex flex-shrink-0" />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
      <TanStackRouterDevtools />
    </div>
  );
}
