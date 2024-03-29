import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/Comic";

export default function DrawerTrendingSection({
  trendingData,
}: {
  trendingData: Comic[];
}) {
  return (
    <>
      <h2 className="mt-4 text-lg font-bold text-emerald-600">Top Trending</h2>
      <ul className="mb-2">
        {trendingData.slice(0, 5).map(
          (comic) =>
            comic?.slug &&
            comic?.title && (
              <Link
                to="/details/$manga"
                params={{
                  manga: comic.slug,
                }}
                key={comic.slug}
              >
                <li className="my-1 ml-4 max-w-full overflow-hidden text-ellipsis text-nowrap text-sm text-slate-50">
                  {comic.title}
                </li>
              </Link>
            ),
        )}
      </ul>
    </>
  );
}
