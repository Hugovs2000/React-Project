import { createLazyFileRoute } from "@tanstack/react-router";
import NotFoundComponent from "../shared/NotFoundComponents";
import SignUpPage from "../modules/SignUp/SignUpPage";

export const Route = createLazyFileRoute("/sign-up")({
  component: SignUpPage,
  notFoundComponent: NotFoundComponent,
});
