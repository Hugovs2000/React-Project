import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/Comic";

export default function DrawerTrendingSection({
  trendingData,
}: {
  trendingData: Comic[];
}) {
  return (
    <>
      <h2 className="font-bold text-emerald-600 mt-4 text-lg">Top Trending</h2>
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
                key={comic.slug}>
                <li className="text-slate-50 ml-4 my-1 text-nowrap max-w-full text-ellipsis overflow-hidden text-sm">
                  {comic.title}
                </li>
              </Link>
            )
        )}
      </ul>
    </>
  );
}
