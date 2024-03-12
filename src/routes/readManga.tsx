import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/readManga")({
  component: ReadManga,
});

function ReadManga() {
  return (
    <>
      <div>Read Manga</div>
    </>
  );
}
