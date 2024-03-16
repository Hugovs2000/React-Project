import { createFileRoute } from "@tanstack/react-router";
import ReadMangaPage from "../modules/ReadMangaPage/ReadMangaPage";

export const Route = createFileRoute("/read/$chapter")({
  component: ReadMangaPage,
});
