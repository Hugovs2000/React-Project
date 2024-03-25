import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/Comic";

export default function DrawerTrendingSection({
  seasonalData,
}: {
  seasonalData: Comic;
}) {
  const resultingSeasonString = seasonalData.season
    ? `${seasonalData.season.charAt(0).toUpperCase() + seasonalData.season.slice(1)}`
    : "Seasonal";

  return (
    <>
      <h2 className="font-bold">{resultingSeasonString} Manwha</h2>
      {seasonalData.data
        ?.filter(
          (item) =>
            item.content_rating === "safe" && !!item.md_covers?.[0]?.b2key
        )
        .slice(0, 5)
        .map(
          (comic) =>
            comic?.slug &&
            comic?.title && (
              <Link
                to="/details/$manga"
                params={{
                  manga: comic.slug,
                }}
                key={comic.slug}>
                <li className="text-slate-50 ml-4 my-1 text-nowrap max-w-full text-ellipsis overflow-hidden text-sm">
                  {comic.title}
                </li>
              </Link>
            )
        )}
    </>
  );
}
