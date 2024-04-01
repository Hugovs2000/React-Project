import { createLazyFileRoute } from "@tanstack/react-router";
import FavouritesPage from "../modules/FavouritesPage/FavouritesPage";
import NotFoundComponent from "../shared/NotFoundComponents";

export const Route = createLazyFileRoute("/favourites")({
  component: FavouritesPage,
  notFoundComponent: NotFoundComponent,
});
