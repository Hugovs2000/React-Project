import { createLazyFileRoute } from "@tanstack/react-router";
import SeeMorePage from "../modules/SeeMorePage/SeeMorePage";

export const Route = createLazyFileRoute("/see-more/$section")({
  component: SeeMorePage,
});
