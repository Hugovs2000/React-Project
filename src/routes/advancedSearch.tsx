import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/advancedSearch")({
  component: AdvancedSearch,
});

function AdvancedSearch() {
  return <div>Advanced Search</div>;
}
