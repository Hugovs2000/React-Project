import { Link } from "@tanstack/react-router";

export default function NotFoundComponent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="m-4">Page Not Found!</div>
      <Link to="/" className="underline text-blue-600">
        Go Home
      </Link>
    </div>
  );
}
