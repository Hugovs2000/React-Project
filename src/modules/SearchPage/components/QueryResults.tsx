import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/Comic";
import SearchCard from "./SearchCard";

export default function QueryResults({
  searchResult,
}: {
  searchResult: Comic[];
}) {
  return (
    <div className="w-full md:w-1/2 z-0">
      <h2 className="mx-8 mt-4 md:mt-8 text-lg">Top Results</h2>
      <div className="h-96 mt-2 md:mt-6 carousel carousel-vertical w-full gap-4 px-6">
        {searchResult
          .filter((comic) => comic.content_rating === "safe")
          .map((comic) => (
            <Link
              to="/details/$manga"
              params={{
                manga: comic.slug!,
              }}
              key={comic.slug}
              className="w-full">
              <div className="carousel-item h-full w-full justify-center flex">
                <SearchCard comic={comic} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
