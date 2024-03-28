import { createLazyFileRoute } from "@tanstack/react-router";
import ReadMangaPage from "../modules/ReadMangaPage/ReadMangaPage";

export const Route = createLazyFileRoute("/read/$manga/$chapter")({
  component: ReadMangaPage,
});
