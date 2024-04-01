import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/Comic";

export default function DrawerSeasonalSection({
  seasonalData,
}: {
  seasonalData: Comic;
}) {
  const resultingSeasonString = seasonalData.season
    ? `${seasonalData.season.charAt(0).toUpperCase() + seasonalData.season.slice(1)}`
    : "Seasonal";

  return (
    <>
      <h2 className="mt-4 text-lg font-bold text-emerald-600">
        {resultingSeasonString} Manwha
      </h2>
      <ul className="mb-2">
        {seasonalData.data
          ?.filter(
            (item) =>
              item.content_rating === "safe" && !!item.md_covers?.[0]?.b2key,
          )
          .slice(0, 5)
          .map(
            (comic) =>
              comic?.slug &&
              comic?.title && (
                <li
                  className="my-1 ml-4 max-w-full overflow-hidden text-ellipsis text-nowrap text-sm text-slate-50"
                  key={comic.slug}
                >
                  <Link
                    to="/details/$manga"
                    params={{
                      manga: comic.slug,
                    }}
                  >
                    {comic.title}
                  </Link>
                </li>
              ),
          )}
      </ul>
    </>
  );
}
