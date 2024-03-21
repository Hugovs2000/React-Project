import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/read/")({
  component: GoBackHomeComponent,
  notFoundComponent: () => {
    return <p>Chapter not found!</p>;
  },
});

function GoBackHomeComponent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="m-4">No Chapter Selected. Return Home</div>
      <Link to="/" className="underline text-blue-600">
        Home
      </Link>
    </div>
  );
}
