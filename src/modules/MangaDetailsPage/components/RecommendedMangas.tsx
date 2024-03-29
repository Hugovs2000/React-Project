import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/Comic";
import RecommendedCard from "./RecommendedCard";

export default function RecommendedMangas({ comic }: { comic: Comic }) {
  if (comic.recommendations?.length === 0) {
    return (
      <div className="mb-4 flex w-full justify-start px-4">
        No Recommendations
      </div>
    );
  }
  return (
    <>
      <div className="mb-4 flex w-full flex-wrap justify-around gap-8 px-8">
        {comic.recommendations?.map((recom) =>
          recom.relates.md_covers.map((cover) => (
            <Link
              to="/details/$manga"
              params={{
                manga: recom.relates.slug,
              }}
              key={recom.relates.title}
            >
              <RecommendedCard recom={recom} cover={cover} />
            </Link>
          )),
        )}
      </div>
    </>
  );
}
