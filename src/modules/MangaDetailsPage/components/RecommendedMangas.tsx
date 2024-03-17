import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/comics";
import RecommendedCard from "./RecommendedCard";

export default function RecommendedMangas({ comic }: { comic: Comic }) {
  if (comic.recommendations.length === 0) {
    return (
      <div className="w-full flex justify-start mb-4 px-4">
        No Recommendations
      </div>
    );
  }
  return (
    <>
      <div className="w-full flex flex-wrap justify-around mb-4 px-8 gap-8">
        {comic.recommendations.map((recom) =>
          recom.relates.md_covers.map((cover) => (
            <Link
              to="/details/$manga"
              params={{
                manga: recom.relates.slug,
              }}
              key={recom.relates.title}>
              <RecommendedCard recom={recom} cover={cover} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}
