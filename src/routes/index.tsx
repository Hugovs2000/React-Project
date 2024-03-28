import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../modules/HomePage/HomePage";
import NotFoundComponent from "../shared/NotFoundComponents";

export const Route = createFileRoute("/")({
  component: HomePage,
  notFoundComponent: NotFoundComponent,
});
