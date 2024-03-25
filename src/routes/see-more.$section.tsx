import { createFileRoute } from "@tanstack/react-router";
import SeeMorePage from "../modules/SeeMorePage/SeeMorePage";

export const Route = createFileRoute("/see-more/$section")({
  component: SeeMorePage,
});
