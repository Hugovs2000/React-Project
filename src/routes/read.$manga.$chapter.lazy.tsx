import { createLazyFileRoute } from "@tanstack/react-router";
import ReadMangaPage from "../modules/ReadMangaPage/ReadMangaPage";
import NotFoundComponent from "../shared/NotFoundComponents";

export const Route = createLazyFileRoute("/read/$manga/$chapter")({
  component: ReadMangaPage,
  notFoundComponent: NotFoundComponent,
});
