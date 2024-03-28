import { createLazyFileRoute } from "@tanstack/react-router";
import SearchPage from "../modules/SearchPage/SearchPage";
import NotFoundComponent from "../shared/NotFoundComponents";

export const Route = createLazyFileRoute("/search")({
  component: SearchPage,
  notFoundComponent: NotFoundComponent,
});
