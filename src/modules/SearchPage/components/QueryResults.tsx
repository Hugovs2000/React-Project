import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/Comic";
import SearchCard from "./SearchCard";

export default function QueryResults({
  searchResult,
}: {
  searchResult: Comic[];
}) {
  return (
    <div className="z-0 w-full md:w-2/3">
      <h2 className="mx-8 mt-4 text-lg md:mt-8">Top Results</h2>
      <div className="carousel carousel-vertical mt-2 h-96 w-full gap-4 px-6 md:mt-6">
        {searchResult
          .filter((comic) => comic.content_rating === "safe")
          .map(
            (comic) =>
              comic?.slug && (
                <Link
                  to="/details/$manga"
                  params={{
                    manga: comic.slug,
                  }}
                  key={comic.slug}
                  className="w-full"
                >
                  <div className="carousel-item flex h-full w-full justify-center">
                    <SearchCard comic={comic} />
                  </div>
                </Link>
              ),
          )}
      </div>
    </div>
  );
}
