import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/Comic";

export default function DrawerLinksSection({
  trendingData,
  continueReadingData,
}: {
  trendingData?: Comic[];
  continueReadingData?: [string, string, string][];
}) {
  return (
    <div>
      <h2 className="mt-4 text-lg font-bold text-emerald-600">
        {continueReadingData ? "Continue Reading" : "Top Trending"}
      </h2>
      <ul className="mb-2">
        {trendingData &&
          trendingData.slice(0, 5).map(
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
        {continueReadingData &&
          continueReadingData
            .map(
              (comic) =>
                comic?.[0] &&
                comic?.[1] &&
                comic?.[2] && (
                  <li
                    className="my-1 ml-4 max-w-full overflow-hidden text-ellipsis text-nowrap text-sm text-slate-50"
                    key={comic[0]}
                  >
                    <Link
                      to="/details/$manga"
                      params={{
                        manga: comic[0],
                      }}
                    >
                      {comic[2]}
                    </Link>
                  </li>
                ),
            )
            .reverse()
            .slice(0, 10)}
      </ul>
    </div>
  );
}
