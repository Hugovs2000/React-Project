import { Link } from "@tanstack/react-router";
import { Comic } from "../../../models/Comic";

export default function DrawerLatestUpdatesSection({
  latestUpdatesData,
}: {
  latestUpdatesData: Comic[];
}) {
  return (
    <>
      <h2 className="mt-4 text-lg font-bold text-emerald-600">
        Latest Updates
      </h2>
      <ul className="mb-2">
        {latestUpdatesData.slice(0, 5).map(
          (comic) =>
            comic?.md_comics?.slug &&
            comic?.md_comics?.title && (
              <li
                className="my-1 ml-4 max-w-full overflow-hidden text-ellipsis text-nowrap text-sm text-slate-50"
                key={comic.md_comics.slug}
              >
                <Link
                  to="/details/$manga"
                  params={{
                    manga: comic.md_comics.slug,
                  }}
                >
                  {comic.md_comics.title}
                </Link>
              </li>
            ),
        )}
      </ul>
    </>
  );
}
