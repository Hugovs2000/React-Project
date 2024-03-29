import { Link, createLazyFileRoute } from "@tanstack/react-router";
import NotFoundComponent from "../shared/NotFoundComponents";

export const Route = createLazyFileRoute("/read/")({
  component: GoBackHomeComponent,
  notFoundComponent: NotFoundComponent,
});

function GoBackHomeComponent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-4">No Chapter Selected. Return Home</div>
      <Link to="/" className="text-blue-600 underline">
        Home
      </Link>
    </div>
  );
}
