import { UseQueryResult } from "@tanstack/react-query";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Comic } from "../../../models/Comic";
import Genre from "../../../shared/Genre";
import convertToUrl from "../../../utils/convert-image-string";

export default function TrendingCard({
  item,
  index,
  comicQueries,
}: {
  item: Comic;
  index: number;
  comicQueries: UseQueryResult<Comic, Error>[];
}) {
  const genres = comicQueries?.[index]?.data?.comic?.md_comic_md_genres?.slice(
    0,
    5,
  );

  return (
    item.md_covers?.[0]?.b2key && (
      <div
        className="relative flex h-full min-w-fit max-w-lg cursor-pointer snap-center flex-col items-center overflow-hidden rounded-xl bg-cover shadow-around md:min-w-96 md:max-w-full"
        style={{
          backgroundImage: `url(${convertToUrl(item.md_covers[0].b2key)})`,
        }}
        key={item.slug}
      >
        <div className="absolute min-h-full min-w-full bg-black/60 backdrop-blur-sm md:min-w-full md:max-w-4xl"></div>
        <div className="z-10 flex h-full w-full">
          <LazyLoadImage
            src={convertToUrl(item.md_covers[0].b2key)}
            alt={item.title}
            className="ml-4 mt-4 h-52 min-w-40 rounded-xl border-2 border-slate-50"
          />
          <div className="items-left flex min-h-full flex-col justify-around gap-4 p-4 text-left">
            <span className="flex flex-col text-xl font-bold">
              {item.title}
            </span>
            <span className="flex flex-col gap-1 text-sm">
              Author:{" "}
              {!comicQueries[index]?.data?.authors?.[0]?.name
                ? "Unknown"
                : comicQueries[index]?.data?.authors?.[0]?.name}
              <span className="text-sm">
                Year: {comicQueries[index].data?.comic?.year}
              </span>
            </span>
          </div>
        </div>
        <div className="z-10 mx-2 my-4 flex flex-wrap justify-center gap-2">
          {genres?.map((genre) => (
            <Genre
              genre={genre}
              className="text-xs"
              key={genre.md_genres.name}
            />
          ))}
        </div>
      </div>
    )
  );
}
