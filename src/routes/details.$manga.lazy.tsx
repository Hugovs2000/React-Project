import { createLazyFileRoute } from "@tanstack/react-router";
import MangaDetailsPage from "../modules/MangaDetailsPage/MangaDetailsPage";

export const Route = createLazyFileRoute("/details/$manga")({
  component: MangaDetailsPage,
});
