import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mangaDetails")({
  component: MangaDetails,
});

function MangaDetails() {
  return (
    <>
      <div>Manga Details</div>
    </>
  );
}
