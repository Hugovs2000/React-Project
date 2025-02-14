import { createLazyFileRoute } from "@tanstack/react-router";
import NotFoundComponent from "../shared/NotFoundComponents";
import LogInPage from "../modules/LogIn/LogInPage";

export const Route = createLazyFileRoute("/log-in")({
  component: LogInPage,
  notFoundComponent: NotFoundComponent,
});
