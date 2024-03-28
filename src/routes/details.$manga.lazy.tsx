import { createLazyFileRoute } from "@tanstack/react-router";
import MangaDetailsPage from "../modules/MangaDetailsPage/MangaDetailsPage";
import NotFoundComponent from "../shared/NotFoundComponents";

export const Route = createLazyFileRoute("/details/$manga")({
  component: MangaDetailsPage,
  notFoundComponent: NotFoundComponent,
});
