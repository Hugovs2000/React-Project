import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../modules/HomePage/HomePage";

export const Route = createFileRoute("/")({
  component: HomePage,
});
