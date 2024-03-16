import { createFileRoute } from "@tanstack/react-router";
import MangaDetailsPage from "../modules/MangaDetailsPage/MangaDetailsPage";

export const Route = createFileRoute("/details/$manga")({
  component: MangaDetailsPage,
});
