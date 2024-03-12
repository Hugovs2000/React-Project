import { createFileRoute } from "@tanstack/react-router";
import HomeComponent from "../components/HomeComponent";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HomeComponent />
    </>
  );
}
