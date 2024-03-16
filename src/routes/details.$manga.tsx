import { createFileRoute } from "@tanstack/react-router";
import MangaDetailsPage from "../modules/MangaDetailsPage/MangaDetailsPage";
import { getComicBySlug } from "../services/api-services";

export const Route = createFileRoute("/details/$manga")({
  loader: ({ params }) => getComicBySlug(params.manga),
  component: MangaDetailsPage,
});
