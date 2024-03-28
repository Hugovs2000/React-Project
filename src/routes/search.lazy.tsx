import { createLazyFileRoute } from "@tanstack/react-router";
import SearchPage from "../modules/SearchPage/SearchPage";

export const Route = createLazyFileRoute("/search")({
  component: SearchPage,
});
