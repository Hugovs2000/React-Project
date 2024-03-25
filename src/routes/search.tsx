import { createFileRoute } from "@tanstack/react-router";
import SearchPage from "../modules/SearchPage/SearchPage";

export const Route = createFileRoute("/search")({
  component: SearchPage,
});
