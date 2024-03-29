import { Link } from "@tanstack/react-router";
import { TopComics } from "../../../models/TopComics";
import SeasonalManga from "./SeasonalManga";

export default function SeasonalSection({
  seasonalData,
}: {
  seasonalData: TopComics;
}) {
  if (
    !(
      seasonalData?.comicsByCurrentSeason?.season ||
      seasonalData?.comicsByCurrentSeason?.data?.[0]
    ) ||
    seasonalData?.comicsByCurrentSeason?.data?.length === 0
  )
    return <></>;

  const resultingSeasonString = seasonalData.comicsByCurrentSeason.season
    ? `${seasonalData.comicsByCurrentSeason.season.charAt(0).toUpperCase() + seasonalData.comicsByCurrentSeason.season.slice(1)}`
    : "Seasonal";

  const filteredComics = seasonalData.comicsByCurrentSeason.data
    ?.filter(
      (item) => item.content_rating === "safe" && !!item.md_covers?.[0]?.b2key
    )
    .slice(0, 12);

  return (
    <div>
      <div className="m-6 mt-8 flex justify-between">
        <h2 className="text-xl text-slate-50">
          {resultingSeasonString} Manhwa
        </h2>
        <Link
          to="/see-more/$section"
          params={{
            section: "seasonal",
          }}>
          <div className="text-blue-400">See more</div>
        </Link>
      </div>
      <div className="carousel carousel-center max-w-full p-4 space-x-4 rounded-box">
        {filteredComics?.map(
          (item) =>
            item.slug && (
              <Link
                to="/details/$manga"
                params={{
                  manga: item.slug,
                }}
                key={item.slug}>
                <SeasonalManga item={item} />
              </Link>
            )
        )}
      </div>
    </div>
  );
}
