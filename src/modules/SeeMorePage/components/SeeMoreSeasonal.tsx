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
    <div className="m-8 text-slate-50">
      <h2 className="my-8 text-xl text-slate-50">
        {resultingSeasonString} Manhwa
      </h2>
      <div className="flex flex-wrap justify-center gap-6 md:justify-start md:gap-10">
        {topData?.comicsByCurrentSeason?.data
          ?.filter(
            (item) =>
              item.content_rating === "safe" && !!item.md_covers?.[0]?.b2key,
          )
          .map(
            (item) =>
              item?.slug &&
              item?.title &&
              item?.md_covers?.[0]?.b2key && (
                <Link
                  to="/details/$manga"
                  params={{
                    manga: item.slug,
                  }}
                  key={item.slug}
                  className="h-50 flex w-24 flex-col items-center justify-start"
                >
                  <SeeMoreCard
                    b2key={item.md_covers[0].b2key}
                    title={item.title}
                  />
                </Link>
              ),
          )}
      </div>
    </div>
  );
}
