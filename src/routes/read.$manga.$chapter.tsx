import { createFileRoute } from "@tanstack/react-router";
import ReadMangaPage from "../modules/ReadMangaPage/ReadMangaPage";

export const Route = createFileRoute("/read/$manga/$chapter")({
  component: ReadMangaPage,
});
