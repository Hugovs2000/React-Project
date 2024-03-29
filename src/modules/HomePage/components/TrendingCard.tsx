import { UseQueryResult } from "@tanstack/react-query";
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
    5
  );

  return (
    item.md_covers?.[0]?.b2key && (
      <div
        className="snap-center relative rounded-xl overflow-hidden flex flex-col min-w-fit max-w-lg md:max-w-full md:min-w-96 h-full bg-cover items-center cursor-pointer shadow-around"
        style={{
          backgroundImage: `url(${convertToUrl(item.md_covers[0].b2key)})`,
        }}
        key={item.slug}>
        <div className="backdrop-blur-sm min-h-full min-w-full md:max-w-4xl md:min-w-full absolute bg-black/60"></div>
        <div className="z-10 flex h-full">
          <img
            src={convertToUrl(item.md_covers[0].b2key)}
            alt={item.title}
            className="rounded-xl border-2 max-w-48 border-slate-50 ml-4 mt-4 h-52"
          />
          <div className="flex flex-col p-4 gap-4 items-left justify-around text-left min-h-full">
            <span className="text-xl flex flex-col font-bold">
              {item.title}
            </span>
            <span className="text-sm flex flex-col gap-1">
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
        <div className="z-10 my-4 mx-2 flex flex-wrap gap-2 justify-center">
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
