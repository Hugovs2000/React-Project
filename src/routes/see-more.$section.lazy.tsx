import { createLazyFileRoute } from "@tanstack/react-router";
import SeeMorePage from "../modules/SeeMorePage/SeeMorePage";
import NotFoundComponent from "../shared/NotFoundComponents";

export const Route = createLazyFileRoute("/see-more/$section")({
  component: SeeMorePage,
  notFoundComponent: NotFoundComponent,
});
