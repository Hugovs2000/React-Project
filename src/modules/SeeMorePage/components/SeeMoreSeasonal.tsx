import { Link } from "@tanstack/react-router";
import { TopComics } from "../../../models/TopComics";
import SeeMoreCard from "./SeeMoreCard";

export default function SeeMoreSeasonal({
  resultingSeasonString,
  topData,
}: {
  resultingSeasonString: string;
  topData: TopComics;
}) {
  return (
    <div className="text-slate-50 m-8">
      <h2 className="text-xl text-slate-50 my-8">
        {resultingSeasonString} Manhwa
      </h2>
      <div className="flex flex-wrap gap-6 md:gap-10 justify-center md:justify-start">
        {topData?.comicsByCurrentSeason.data
          ?.filter(
            (item) =>
              item.content_rating === "safe" && !!item.md_covers?.[0]?.b2key
          )
          .map(
            (item) =>
              item.slug &&
              item.title &&
              item?.md_covers?.[0].b2key && (
                <Link
                  to="/details/$manga"
                  params={{
                    manga: item.slug,
                  }}
                  key={item.slug}
                  className="h-50 w-24 flex flex-col justify-start items-center">
                  <SeeMoreCard
                    b2key={item?.md_covers?.[0].b2key}
                    title={item.title}
                  />
                </Link>
              )
          )}
      </div>
    </div>
  );
}
