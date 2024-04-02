import { Link } from "@tanstack/react-router";

export default function NotFoundComponent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-4">Page Not Found!</div>
      <Link to="/" className="text-blue-600 underline">
        Go Home
      </Link>
    </div>
  );
}
